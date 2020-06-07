var mysql = require("mysql");
var connection;
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "app",
//   password: "original1!",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

if (process.env.JAWSDB_URL) {
connection = mysql.createConnecton(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection( {
  host: "localhost",
  user: "app",
  password: "original1!",
  database: "burgers_db"
});
};

// Export connection for our ORM to use.

connection.connect();
module.exports = connection;
