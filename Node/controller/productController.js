var dbconnection = require("../config/db_connection"); // Import the connection pool
var express = require("express");
var router = express.Router();

// ✅ Use pool.query() for executing queries with 'pg'
router.get("/", (req, res) => {
  dbconnection.query("SELECT * FROM product", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error fetching data from database");
    } else {
      res.json(results.rows); // Access results through 'rows' for 'pg'
    }
  });
});

router.get("/:id", (req, res) => {
  const query = "SELECT * FROM product WHERE id = $1";
  const values = [req.params.id];
  dbconnection.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error fetching data from database");
    } else {
      res.json(results.rows); // Use 'rows' to get result data
    }
  });
});

router.post("/", (req, res) => {
  const { id, name, description, price } = req.body;

  const query =
    "INSERT INTO product (id, name, description, price) VALUES ($1, $2, $3, $4)";
  const values = [id, name, description, price];

  dbconnection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting data into database");
    } else {
      res.send({ message: "Added Successfully..." });
    }
  });
});

router.put("/:id", (req, res) => {
  const { name, description, price } = req.body;
  const query =
    "UPDATE product SET name = $1, description = $2, price = $3 WHERE id = $4";
  const values = [name, description, price, req.params.id];

  dbconnection.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send("Could not update");
    } else {
      res.send({ message: "Updated Successfully" });
    }
  });
});

router.delete("/:id", (req, res) => {
  const query = "DELETE FROM product WHERE id = $1";
  const values = [req.params.id];

  dbconnection.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send("Could not delete");
    } else {
      res.send({ message: "Deleted Successfully" });
    }
  });
});

module.exports = router;
