const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parses incoming JSON requests and puts the parsed data in req.body

// Import routes
const tripRoutes = require('./routes/tripRoutes');


// Use Routes
app.use('/api/trips', tripRoutes); // This mounts your trip routes on /api/trips

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
