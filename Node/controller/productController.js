var dbconnection = require("../config/db_connection"); // Import the connection pool
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  dbconnection.execute("SELECT * FROM product", (error, results) => {
    // ✅ Use execute() for executing queries with mysql2
    if (error) {
      console.error(error);
      res.status(500).send("Error fetching data from database");
    } else {
      res.json(results); // Properly send JSON response
    }
  });
});

router.get("/:id", (req, res) => {
  dbconnection.execute(
    "SELECT * FROM product WHERE id=" + req.params.id,
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error fetching data from database");
      } else {
        res.json(results);
      }
    }
  );
});

router.post("/", (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var description = req.body.description;
  var price = req.body.price;

  const query =
    "INSERT INTO product (id, name, description, price) VALUES (?, ?, ?, ?)";
  const values = [id, name, description, price];

  dbconnection.execute(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting data into database");
    } else {
      res.send({ message: "Added Successfully..." });
    }
  });
});

router.put("/:id", (req, res) => {
  var id = req.params.id;
  var name = req.body.name;
  var description = req.body.description;
  var price = req.body.price;
  const query =
    "UPDATE product SET name = ?, description = ?, price = ? WHERE id = ?";
  const values = [name, description, price, id];
  dbconnection.execute(query, values, (error, result) => {
    if (error) {
      res.status(500).send("Could not update");
    } else {
      res.send({ message: "Updated Successfully" });
    }
  });
});

router.delete("/:id", (req, res) => {
  var id = req.params.id;
  const query = "DELETE FROM product WHERE id = ?";
  values = [id];
  dbconnection.execute(query, values, (error, result) => {
    if (error) {
      res.status(500).send("Could not delete",error);
    } else {
      res.send({ message: "Deleted Successfully" });
    }
  });
});

module.exports = router;
