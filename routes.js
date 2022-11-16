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

router.get("/Recipe_Display", function(req,res)
{
    // loads search only when recipe display loaded
    var search = require("./Search");

    // delays so search can finish running
    setTimeout(() => 
    {
        res.render("home/Recipe_Display");
    }, "1000")
   
});

router.get('/Find_Recipe', function(req, res) 
{
    // queries from our database, and sends that as an iterable object that "find_recipe" can use
    var sql1='SELECT * FROM foods';
    var sql2='SELECT * FROM foodCategory';

    // SQL statements for filtering
    var sql3= 'SELECT * from foods where category_name = \'baking\' ';
    var sql4= 'SELECT * from foods where category_name = \'beans\\nuts\\seeds\' ';
    var sql5= 'SELECT * from foods where category_name = \'dairy\' ';
    var sql6= 'SELECT * from foods where category_name = \'dessert\' ';
    var sql7= 'SELECT * from foods where category_name = \'fruit\' ';
    var sql8= 'SELECT * from foods where category_name = \'grain\' ';
    var sql9= 'SELECT * from foods where category_name = \'misc.\' ';
    var sql10= 'SELECT * from foods where category_name = \'protein\' ';
    var sql11= 'SELECT * from foods where category_name = \'spices\' ';
    var sql12= 'SELECT * from foods where category_name = \'vegetables\' ';

    conn.query(sql1, function (err, data) 
    {
        if (err) throw err;
        conn.query(sql2, function (err2, data2) 
        {
            if(err2) throw err2;
            res.render('home/Find_Recipe', {title:'Food Buttons',foodData:data,categoryData:data2});
            
            //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
            // conn.query(sql3, function(err3, data3)
            // {
            //     if(err3) throw err3;
            //     res.render('home/Find_Recipe', {title:'Food Buttons',foodData:data,categoryData:data3});
            // })
        }) 
    });
});

module.exports = router; // need to export to use in other modules