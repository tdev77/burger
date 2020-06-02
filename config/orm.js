var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, vals, values, cb) {
        var queryString = "INSERT INTO " + table + `(${vals})`; 
        queryString += " VALUES";
        console.log(queryString);
        connection.query(queryString, values, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

      updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table; 
        queryString += " SET ";
        queryString += " WHERE ";
         queryString += condition;
         console.log(queryString);
         connection.query(queryString, id, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
    };
    
    module.exports = orm;