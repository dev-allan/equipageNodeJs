const mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'equipage'
});
 
connection.connect();
 
//connection.end();

module.exports = connection;