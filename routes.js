var express = require("express");
var router = express.Router();
const conn = require("./database");

router.get("/", function(req,res)
{
    console.log("Hello Im on the start page!");
    res.render("home/index"); //
});

router.get("/index", function(req,res)
{
    res.render("home/index"); //
});

router.get("/FAQ", function(req,res)
{
    res.render("home/FAQ");
});

router.get("/Log_In", function(req,res)
{
    res.render("home/Log_In");
});

router.get("/Creators", function(req,res)
{
    res.render("home/Creators");
});

router.get("/Learn_App", function(req,res)
{
    res.render("home/Learn_App");
});

router.get("/Find_Recipe", function(req,res)
{
    res.render("home/Find_Recipe");
});

// renders the page with the food table
router.get('/food_list', function(req, res) {
    var sql='SELECT * FROM foods';
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.render('testing/food_list', { title: 'Food List', foodData: data});
  });
});

// renders a page with food buttons (no filters for category implemented yet)
router.get('/food_buttons', function(req, res) {
    var sql='SELECT * FROM foods';
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.render('testing/food_buttons', { title: 'Food Buttons', foodData: data});
  });
});

module.exports = router; // need to export to use in other modules