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

// this makes src in script tags work idk why lol
FoodWeb.use(express.static(__dirname));

FoodWeb.listen(FoodWeb.get("port"),function()
{
	console.log("Server started on port " + FoodWeb.get("port"));
});