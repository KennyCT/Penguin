const fs = require('fs');

function getPassword() {
    pass = '??'
    pass = fs.readFileSync('../../pw.txt');
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
    console.log(results);
  });

  // close the database connection
  connection.end();
});