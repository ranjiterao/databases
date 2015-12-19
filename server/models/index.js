var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', [],function(err, results){
        if (err) throw err;
        else {
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (callback, data) {
      var queryArgs = [data.message, data.user_id, data.room];
      db.query('INSERT INTO users (message, user_id, room) VALUES (?,?,?)', queryArgs,function(err, results) {
        if (err) {
          throw err;
        } 
        else {
          callback(results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', [], function(err, results){
        if (err) {
          throw err;
        }
        else {
          callback(results);
        }
      });
    },
    post: function (callback, data) {
      var queryArgs = [data.username];
      db.query('INSERT INTO users (username) VALUES (?)', queryArgs, function(err, results) {
        if (err) {
          throw err;
        } 
        else {
          callback(results);
        }
      });
    }
  }
};

