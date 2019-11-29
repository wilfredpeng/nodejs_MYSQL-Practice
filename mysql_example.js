var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Paofan@9783",
    database: "TestDB"
});

con.connect(function(err) {
    if (err) {
        console.log(err)
        // console.log('connecting error');
        return;
    }
    console.log('connecting success');
});