//const fs = require('fs');

function getPassword() {
    pass = '??'
    pass = ''
    //pass = fs.readFileSync('../../pw.txt');
    return pass;
}

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '212.192.28.59',
  user: 'u111397_aTYQzdEwki',
  password: getPassword(),
  database: 's111397_penguin'
});

connection.connect((err) => {
  if (err) return console.error("error: ", err.message);

  var sql = `SELECT * FROM users`;

  connection.query(sql, [true], (error, results, fields) => {
    if (error) return console.error(error.message);
    //console.log(results);
    for (var x = 0; x < results.length; x++) {
      console.log(results[x].username);
    }
  });

  // close the database connection
  connection.end();
});


function getUsernameRandom() {
  connection.connect((err) => {
    if (err) return console.error("error: ", err.message);
  
    var sql = `SELECT * FROM users`;
  
    connection.query(sql, [true], (error, results, fields) => {
      if (error) return console.error(error.message);
      //console.log(results);
      return results[0].username;

    });
  
    // close the database connection
    connection.end();
  });
}