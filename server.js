const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080; 

app.use(cors());
app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

// Make sure this matches the lowercase 'port' from line 4
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});