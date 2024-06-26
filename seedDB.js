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
    {
      title: "Miami Beach Vacation",
      description: "Down South",
      begin_date: new Date(2024, 4, 4),
      end_date: new Date(2024, 4, 12),
      participants: ['Greg', 'Jose', 'Juan', 'Juanita'],
      begin_point: "Charleston, SC",
      end_point: "Miami, FL",
      image_url: "https://live.staticflickr.com/65535/53647655805_4f45d94f9b_w.jpg",
    },
    {
      title: "Orlando",
      description: "Hello City Walk",
      begin_date: new Date(2024, 4, 4),
      end_date: new Date(2024, 4, 12),
      participants: ['Sam', 'Charlie', 'Sammy', 'Samuel'],
      begin_point: "Charleston, SC",
      end_point: "Orlando, FL",
      image_url: "https://live.staticflickr.com/65535/53646325267_80bcc8f9bd_w.jpg",
    },
    {
      title: "Tampa Bay",
      description: "Turquoise Waters",
      begin_date: new Date(2024, 4, 4),
      end_date: new Date(2024, 4, 12),
      participants: ['Alex', 'Charlie', 'Edward', 'Margo'],
      begin_point: "Charleston, SC",
      end_point: "Tampa Bay, FL",
      image_url: "https://live.staticflickr.com/65535/53661192444_cba0fdf533.jpg",
    },
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
