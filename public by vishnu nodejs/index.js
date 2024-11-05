const Express = require("express");
const products = require("./products.json");

// STEP 1: Create a API SERVER
const API_SERVER = Express();

// PARSING INCOMING REQUEST BODY AS JSON
API_SERVER.use(Express.json());

// SERVING STATIC FILES
API_SERVER.use(Express.static('public'));

// ROUTE 1: /
API_SERVER.get("/", function (request, response) {
   // return response.send("/ - Request received")
   return response.json({
    message: "Hello Folks",
    success: true
   });
});

// ROUTE 1: /
API_SERVER.get("/", function (request, response) {
    // return response.send("/ - Request received")
    return response.json({
     message: "Hello Folks",
     success: true
    });
 });

// ROUTE 2: 
// PATH = /products
// METHOD = GET
API_SERVER.get("/products", function (request, response) {
    // return response.send("/ - Request received")
    return response.json({
     message: "Products fetched successfully",
     success: true,
     data: products.data
    });
 });

// ROUTE 3:
// PATH = /products
// METHOD = POST
API_SERVER.post("/products/create", function (request, response) {
    console.log("HERE", request.body);
    return response.json({
        message: "Product created successfully!",
        success: true
    });
})

// STEP 2: START AND LISTEN INCOMING REQUEST TO THIS SERVER
API_SERVER.listen(3000, "localhost", function () {
    console.log("Server started");
    console.log(`http://localhost:3000`)
});