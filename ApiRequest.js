const express = require('express');
const rp = require('request-promise');
const router = express.Router();

router.post('/', (req, res) => {
  res.send({'cool': 'stuff'});
});

module.exports = router;