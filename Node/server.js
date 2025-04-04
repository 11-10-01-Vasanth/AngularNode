var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.json()); 
app.use(cors());
app.use(cors({
  origin: 'http://localhost:4200', // Replace with your Angular app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true })); 

var productcontroller = require("./controller/productController") 

app.use("/api/products", productcontroller);

app.listen(8080, () => {
  console.log("Server is listening on 8080");
});
