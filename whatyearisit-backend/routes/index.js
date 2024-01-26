var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res) {
  res.json({ year: '1989' });
});

module.exports = router;
