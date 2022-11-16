// Sources
// https://www.scrapingbee.com/blog/web-scraping-javascript/
// https://www.scrapingbee.com/blog/node-fetch/
// https://stackoverflow.com/questions/15343292/extract-all-hyperlinks-from-external-website-using-node-js-and-request

//var list = [];
//list = localStorage.getItem("selectedArray");
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

var request = require('request');
var cheerio = require('cheerio');
var linkNames = [];
var recipeLinks = [];
var done = false;

// arrays to store our cleaned links
var cleanedNames = [];
var cleanedLinks = [];

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
    done = true;
	for(var j = 0; j < cleanedNames.length; j++)
		console.log((j+1) + ": " + cleanedNames[j] + "\n" + cleanedLinks[j] + "\n\n");

	console.log("Done!");
});
//stealing this idea to see if it works
if(done)
{
    //localStorage.setItem("names", cleanedNames);
    //localStorage.setItem("links", cleanedLinks);
}