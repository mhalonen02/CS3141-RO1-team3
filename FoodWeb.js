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


// Recipe Link Stuff Below
// -----------------------------------------------------------------------------

// temp list for testing
var list = ["beef", "rice", "cheese"];
var url = "https://www.google.com/search?q=healthy+recipes+with+";

// adds each food to the search followed by a + for correct formatting
for(var i = 0; i < list.length; i++)
{
    url += list[i];
    if(i == list.length - 1)
        break;
    url += "+";
}

// https://www.scrapingbee.com/blog/web-scraping-javascript/
// https://www.scrapingbee.com/blog/node-fetch/
// https://stackoverflow.com/questions/15343292/extract-all-hyperlinks-from-external-website-using-node-js-and-request
var request = require('request');
var cheerio = require('cheerio');
var linkNames = [];
var recipeLinks = [];
request(url, function(err, resp, body)
{
    $ = cheerio.load(body);
    links = $('a'); //jquery get all hyperlinks
    $(links).each(function(i, link)
    {
		//console.log($(link).text() + ':\n  ' + $(link).attr('href'));
        linkNames.push($(link).text());
		recipeLinks.push($(link).attr('href'));
    });

	// arrays to store our cleaned links
	var cleanedNames = [];
	var cleanedLinks = [];

	// starts at 14 bc all the other links are junk
	var counter = 14;
	var i = 0;

	// gets the 5 links we want
	while(i < 5)
	{
		// only adds the good stuff
		if(linkNames[counter] != "")
		{
			cleanedNames.push(linkNames[counter]);
			cleanedLinks.push(recipeLinks[counter]);
			i++;
		}
		counter++;
	}

	for(var j = 0; j < cleanedNames.length; j++)
		console.log((j+1) + ": " + cleanedNames[j] + "\n" + cleanedLinks[j] + "\n\n");

	console.log("Done!");
});
