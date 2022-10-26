var express = require("express");

var router = express.Router();

router.get("/index", function(req,res)
{
    console.log("Hello Im on the start page!");
    res.render("index"); //
});

router.get("/FAQ", function(req,res)
{
    res.render("FAQ");
});

router.get("/Log_In", function(req,res)
{
    res.render("Log_In");
});

router.get("/Creators", function(req,res)
{
    res.render("Creators");
});

router.get("/Learn_App", function(req,res)
{
    res.render("Learn_App");
});

router.get("/Find_Recipe", function(req,res)
{
    res.render("Find_Recipe");
});


module.exports = router; // need to export to use in other modules