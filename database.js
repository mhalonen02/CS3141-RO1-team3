// makes connection to mysql database
// run into errors if in the main app
var mysql = require('mysql');

var conn = mysql.createConnection({ 
    multipleStatements: true,
    host: 'classdb.it.mtu.edu',
    user: 'cs3141t03r01_rw',
    password: 'Abc123!!',
    database: 'cs3141t03r01',
    port	 :	'3307'
});

conn.connect(function(err){
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


// $query_1 = 'SELECT * from foodCategory LIMIT 10';
// //const rows;

// conn.query($query_1, function(err, rows) {
//     if(err){
//         console.log("An error ocurred performing the query.");
//         return;
//     }

//     console.log("Query succesfully executed: ", rows);
//     console.log(typeof(rows));
// });

//console.log(rows);

// query function to run sql statements - NOT currently working
// conn.query(mysql, function(err){

// });

module.exports = conn;