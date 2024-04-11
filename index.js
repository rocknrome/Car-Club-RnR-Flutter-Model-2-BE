const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const cors = require('cors'); // Imported CORS
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enabled CORS for all origins
app.use(bodyParser.json()); // Parses incoming JSON requests and puts the parsed data in req.body

// Import routes
const tripRoutes = require('./routes/tripRoutes');

// Use Routes
app.use('/trips', tripRoutes);

// Route for the root URL
app.get('/', (req, res) => {
  res.send("The Model 2 BE is alive");
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
