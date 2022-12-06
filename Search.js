// Sources
// https://www.scrapingbee.com/blog/web-scraping-javascript/
// https://www.scrapingbee.com/blog/node-fetch/
// https://stackoverflow.com/questions/15343292/extract-all-hyperlinks-from-external-website-using-node-js-and-request

const conn = require("./database");
var list = ["kale", "rice", "beef"];
var url = "https://www.google.com/search?q=healthy+recipes+with+";
var request = require('request');
var cheerio = require('cheerio');
const { stringify } = require("querystring");
var linkNames = [];
var recipeLinks = [];
var done = false;
var cleanedNames = [];
var cleanedLinks = [];

// adds each food to the search followed by a + for correct formatting
for(var i = 0; i < list.length; i++)
{
    url += list[i];
    if(i == list.length - 1)
        break;
    url += "+";
}

request(url, function(err, resp, body)
{
    $ = cheerio.load(body);
    links = $('a'); //jquery get all hyperlinks
    $(links).each(function(i, link)
    {
		//console.log($(link).text() + ':\n  ' + $(link).attr('href'));
		//https://www.tabnine.com/code/javascript/functions/cheerio/href
		const href = $(link).attr('href').split("=");
		$(link).attr('href', href[1]);

		const href2 = $(link).attr('href').split("&");
		$(link).attr('href', href2[0]);

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
	//for(var j = 0; j < cleanedNames.length; j++)
	//	console.log((j+1) + ": " + cleanedNames[j] + "\n" + cleanedLinks[j] + "\n\n");

	//console.log("Done!");

	// clear data from database
	var stmt = "delete from searchData";
	conn.query(stmt, function(err,results)
	{
		if(err) throw err;
	});

	// insert data into database
	var sql = "insert into searchData values(?,?)";
	for(var i = 0; i < cleanedNames.length; i++)
	{
		var todo = [cleanedNames[i], cleanedLinks[i]];
		conn.query(sql, todo, (err,results,fields) =>
		{
			if(err) throw err;
		});
	}
});