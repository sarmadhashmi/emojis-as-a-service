const express = require('express');
const rp = require('request-promise');
const router = express.Router();

router.post('/', (req, res) => {
  const opetions = {
    method: 'POST',
    uri: 'http://api.kairos.com/',
    headers: {
      app_id: process.env.API_ID,
      app_key: process.env.API_KEY,
    },
    body: {
      image: req.body.image,
    },
    json: true,
  }
});

module.exports = router;