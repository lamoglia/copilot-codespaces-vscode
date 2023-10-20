// Create web server
// Get comments from the database
// Send comments to the client
// Receive comments from the client
// Save comments to the database

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create an express instance
const app = express();

// Configure express instance
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create a route for the comments endpoint
app.get('/comments', (req, res) => {
  res.send([
    {
      username: 'Darth Vader',
      body: 'I find your lack of faith disturbing.'
    },
    {
      username: 'Luke Skywalker',
      body: 'I am a Jedi, like my father before me.'
    }
  ]);
});

// Start the server
app.listen(process.env.PORT || 8081);