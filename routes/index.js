const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json'); 

const professionalController = require('../controllers/professional');

// Swagger Route
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/professional', professionalController.getAll);
router.use('/contacts', require('./contacts'));

module.exports = router;