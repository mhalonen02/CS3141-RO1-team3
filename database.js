// creates connection to the MYSQL database that can be exported to other files

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

module.exports = conn;