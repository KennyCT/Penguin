var mysql = require('mysql');

var con = mysql.createConnection({
  host: "aws.connect.psdb.cloud",
  user: "wtaprvqhshryx9z9nmg5",
  password: "pscale_pw_6FX8KkQ05oD7QApe7xEmJ1hyfEeOjrYftQlGpqUKOsL"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// DATABASE_URL='mysql://wtaprvqhshryx9z9nmg5:************@aws.connect.psdb.cloud/penguin?ssl={"rejectUnauthorized":true}'

/*
require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
connection.end()
*/