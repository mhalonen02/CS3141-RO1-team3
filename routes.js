var express = require("express");
const { isBuffer } = require("util");
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

// shows buttons on the page since below code does not currently work
// router.get("/food_buttons", function(req,res)
// {
//     res.render("testing/food_buttons");
// });

// router.get("/food_list", function(req,res)
// {
//     res.render("testing/food_list");
// });

// have one router to the buttons page
// send query w/ all categories
// send query w/ food from each category separately
// so then on the buttons page we can only show certain categories?

// renders the page with the tables -- for testing and commented out 11/2/2022
// router.get('/food_list', function(req, res) {
//     var sql1='SELECT * FROM foods';
//     var sql2='SELECT * FROM foodCategory';
//     conn.query(sql1, function (err, data) {
//         if (err) throw err;
//         conn.query(sql2, function (err2, data2) {
//             if(err2) throw err2;
//             res.render('testing/food_list', {title:'Food List',foodData:data,categoryData:data2});
//         }) 
//     });
// });

// renders a page with food buttons (no filters for category implemented yet)
router.get('/food_buttons', function(req, res) {
    var sql1='SELECT * FROM foods';
    var sql2='SELECT * FROM foodCategory';
    conn.query(sql1, function (err, data) {
        if (err) throw err;
        conn.query(sql2, function (err2, data2) {
            if(err2) throw err2;
            res.render('testing/food_buttons', {title:'Food Buttons',foodData:data,categoryData:data2});
        }) 
    });
});

module.exports = router; // need to export to use in other modules