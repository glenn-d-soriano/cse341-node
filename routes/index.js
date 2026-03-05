const express = require('express');
const router = express.Router();

const professionalController = require('../controllers/professional');


router.get('/', (req, res) => {
  res.send('Hello! API is working!');
});

router.get('/professional', professionalController.getAll);

module.exports = router;