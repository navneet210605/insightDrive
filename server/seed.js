const mongoose = require('mongoose');
const Driver = require('./models/Driver'); // Adjust path if needed
require('dotenv').config();

const seedDrivers = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
  const drivers = [
    { name: "Amit Sharma", vehicleNumber: "HR-26-AB-9988" },
    { name: "Suresh Raina", vehicleNumber: "UP-14-XY-5544" },
    { name: "Vikram Singh", vehicleNumber: "PB-01-AS-1122" }
  ];

  await Driver.insertMany(drivers);
  console.log("Drivers added successfully!");
  process.exit();
};

seedDrivers();