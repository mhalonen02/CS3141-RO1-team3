// 10/18/2022 MEG: Using express/node to create web application using youtube link 
// Part I https://www.youtube.com/watch?v=EMwu8F0dCXE&ab_channel=rdzfinalrounduser
// Part II https://www.youtube.com/watch?v=rt9AS79ppnM&ab_channel=rdzfinalrounduser
var express = require("express");
var path = require("path");
var routes = require("./routes");

var FoodWeb = express();

FoodWeb.set("port", process.env.PORT || 8000);

FoodWeb.set("views", path.join(__dirname, "views"));
FoodWeb.set("view engine", "ejs");

FoodWeb.use(routes);

FoodWeb.listen(FoodWeb.get("port"),function()
{
	console.log("Server started on port " + FoodWeb.get("port"));
});

// Get the mysql service
var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection
({
    host     : 'classdb.it.mtu.edu',
	//connect to cs3141t03r01_ro OR cs3141t03r01_rw?
    user     : 'cs3141t03r01_ro',
    password : 'Abc123!!',
    database : 'cs3141t03r01',
	port	 :	'3307'
});



// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
		console.log("Ping unsuccessful");
        console.log("Eror code: " + err.code);
        console.log("Fatal? " + err.fatal);
    }
	else
	{
		console.log("Ping successful");
	}
});

// // Perform a query
// $query = 'SELECT * from foods LIMIT 10';

// connection.query($query, function(err, rows, fields) {
//     if(err){
//         console.log("An error ocurred performing the query.");
//         return;
//     }

//     console.log("Query succesfully executed: ", rows);
// });

// Close the connection
connection.end(function(){
    // The connection has been closed
});