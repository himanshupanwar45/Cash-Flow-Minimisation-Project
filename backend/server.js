// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Choose any port number you want

app.use('/backend', express.static(path.join(__dirname, 'backend')));

// Set up static files directory
app.use(express.static(path.join(__dirname)));

// Define route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
