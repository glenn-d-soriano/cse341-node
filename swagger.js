const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API'
  },
  host: 'cse341-node-j9h8.onrender.com', //update to go to render instead of local host
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; // This should point to my main router

swaggerAutogen(outputFile, endpointsFiles, doc);