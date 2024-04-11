const connectDB = require('./db');
const Trip = require('./models/Trip');
require('dotenv').config();

connectDB();

const tripsData = [
    {
      title: "Trip to Niagra Falls",
      description: "An amazing scenic route taken to Niagra Falls",
      begin_date: new Date(2024, 4, 4),
      end_date: new Date(2024, 4, 12),
      participants: ['Alice', 'Charlie', 'Edward', 'Julia'],
      begin_point: "Charleston, SC",
      end_point: "Niagra Falls, NY",
      image_url: "https://live.staticflickr.com/65535/53647346655_e3950c4a04.jpg",
    },

  ];

  const seedDB = async () => {
    try {
      await Trip.deleteMany();
      await Trip.insertMany(tripsData);
      console.log("Database seeded successfully!");
    } catch (err) {
      console.error("Database seeding error:", err);
    } finally {
      process.exit();
    }
  };

  seedDB();
