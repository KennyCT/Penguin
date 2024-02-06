import mysql, { Connection, FieldPacket, QueryError, QueryResult } from 'mysql';

const connection: Connection = mysql.createConnection({
  host: '212.192.28.59',
  user: 'u111397_aTYQzdEwki',
  password: '',
  database: 's111397_penguin'
});

connection.connect((err: QueryError) => {
  if (err) return console.error("error: ", err.message);

  const sql: string = `SELECT * FROM users`;

  connection.query(sql, [true], (error: QueryError, results: QueryResult, fields: FieldPacket[]) => {
    if (error) return console.error(error.message);
    //console.log(results);
    for (let x: number = 0; x < results.length; x++) {
      console.log(results[x].username);
    }
  });

  // close the database connection
  connection.end();
});