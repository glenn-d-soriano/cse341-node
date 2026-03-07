require('dotenv').config();

console.log("Mongo URI:", process.env.MONGODB_URI);
const express = require('express');
const cors = require('cors');
const mongodb = require('./db/connection'); 
const app = express();
const port = process.env.PORT || 8080; 

app.use(cors());
app.use(express.json());
app.use('/', require('./routes'));

// Import routes
mongodb.initDb((err) => {
  if (err) {
    console.log('Error connecting to MongoDB:', err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening at http://localhost:${port}`);
    });
  }
});