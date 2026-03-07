const express = require('express');
const router = express.Router();

const professionalController = require('../controllers/professional');


router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/professional', professionalController.getAll);
router.use('/contacts', require('./contacts'));

module.exports = router;