var express = require("express");
var cors = require("cors");
var app = express();

// ✅ Middleware to parse incoming JSON requests
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// ✅ CORS Configuration for Angular App
app.use(cors({
  origin: 'http://localhost:4200', // Your Angular app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Importing your product controller
var productcontroller = require("./controller/productController"); 

// ✅ Using your product controller with API route
app.use("/api/products", productcontroller);

// ✅ Starting the server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
