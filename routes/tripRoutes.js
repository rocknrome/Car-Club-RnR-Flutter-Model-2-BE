const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');

// Middleware to get trip by ID
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

// PUT: Update a trip by ID
router.put('/:id', getTrip, async (req, res) => {
    if (req.body.title != null) {
        res.trip.title = req.body.title;
    }
    if (req.body.description != null) {
        res.trip.description = req.body.description;
    }
    if (req.body.begin_date != null) {
        res.trip.begin_date = new Date(req.body.begin_date);
    }
    if (req.body.end_date != null) {
        res.trip.end_date = new Date(req.body.end_date);
    }
    if (req.body.participants != null) {
        res.trip.participants = req.body.participants;
    }
    if (req.body.begin_point != null) {
        res.trip.begin_point = req.body.begin_point;
    }
    if (req.body.end_point != null) {
        res.trip.end_point = req.body.end_point;
    }
    if (req.body.image_url != null) {
        res.trip.image_url = req.body.image_url;
    }
    try {
        const updatedTrip = await res.trip.save();
        res.json(updatedTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
