const mongoose = require("mongoose");
require("dotenv").config();
// const Redis = require("ioredis");

// const redisClient = new Redis({
//   username: process.env.REDIS_USERNAME,
//   password: process.env.REDIS_PASSWORD,
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   enableReadyCheck: false,
// });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
// add redisClient to "module.exports"
