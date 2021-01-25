var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("user_test");
  console.log("user_test1");
  console.log("user_test2");
  console.log("user_test3");
  console.log("user_test4");
});

module.exports = router;
