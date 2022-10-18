//10/17/22 code to create a local server on your machine



// const http = require("http");

// const host = 'localhost';
// const port = 8000;

// const requestListener = function (req, res){
// 	res.writeHead(200);
// 	res.end("Server has been accessed.");
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
// 	console.log('Server is running on http://${host}:${port}');
// });


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