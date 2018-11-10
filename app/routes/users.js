var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET users listing. */

   router.get('/', function(req, res, next) {
    user.find({}, function (err, docs) {
      res.send(JSON.stringify(docs));
    });
});



module.exports = router;
