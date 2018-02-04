const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const dbUrl = 'mongodb://localhost:27017/rccapp'

// Connect
const connection = (closure) => {
  return MongoClient.connect(dbUrl, (err, database) => {
    if (err) return console.log(err);

    closure(database);
    });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((database) => {
    let mydb = database.db('rccapp')
    mydb.collection('users')
      .find()
      .toArray()
      .then((users) => {
          response.data = users;
          res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

module.exports = router;
