tripRoutes.js
const express = require('express');
const router = express.Router();
const Trip = require('../Trip'); // Adjust the path as necessary to your Trip model

// POST: Create a new trip
router.post('/', async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Retrieve all trips
router.get('/', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: Retrieve a trip by ID
router.get('/:id', getTrip, (req, res) => {
  res.json(res.trip);
});

// PUT: Update a trip by ID
router.put('/:id', getTrip, async (req, res) => {
  if (req.body.title != null) {
    res.trip.title = req.body.title;
  }
  // Repeat for other fields
  try {
    const updatedTrip = await res.trip.save();
    res.json(updatedTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a trip by ID
router.delete('/:id', getTrip, async (req, res) => {
  try {
    await res.trip.remove();
    res.json({ message: 'Deleted Trip' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a trip by ID
async function getTrip(req, res, next) {
  let trip;
  try {
    trip = await Trip.findById(req.params.id);
    if (trip == null) {
      return res.status(404).json({ message: 'Cannot find trip' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.trip = trip;
  next();
}

module.exports = router;