var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        res.end(200, results);
      })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(function(results) {
        res.end(302, results);
      }, req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results) {
        res.end(200, results);
      })

    },
    post: function (req, res) {
      models.users.post(function(results){
        res.end(302, results);
      }, req.body);

    }
  }
};

