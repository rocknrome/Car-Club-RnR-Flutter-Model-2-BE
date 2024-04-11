const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  begin_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  participants: [String],
  begin_point: {
    lat: Number,
    lng: Number
  },
  end_point: {
    lat: Number,
    lng: Number
  },
  image_url: String,
  created_at: { type: Date, default: Date.now },
  updated_at: Date
});

tripSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('Trip', tripSchema);