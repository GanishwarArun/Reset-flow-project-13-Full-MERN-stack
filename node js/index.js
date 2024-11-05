const Express = require('express');
const products = require('./products.json');

//Environment variables config
require('dotenv').config();

// step 1 : create a API Server
const API_SERVER = Express(); 

//Parsing Incoming Request Body as JSON
API_SERVER.use(Express.json());

//SERVING STATIC FILES
API_SERVER.use(Express.static('public'));

//route 1: / 
API_SERVER.get("/", function (request, response) {
    // return response.send("/ - Request received")
})


//step2: start and listen incoming request to this server 
API_SERVER.listen(3000, "localhost", function () {
    console.log("Server started");
    console.log("http://localhost:3000");
})