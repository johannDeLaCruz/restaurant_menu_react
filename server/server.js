const express = require("express");
const connectDB = require("./db.config");
const apiRoute = require("./api.js");
const cors = require("cors");

require("dotenv").config();

const app = express();
const SERVERPORT = process.env.SERVER_PORT || 3000;
const CLIENTPORT = process.env.CLIENT_PORT || 5173;
app.use(cors({ origin: CLIENTPORT }));

// Connect to MongoDB Atlas
connectDB();

app.use(express.json());

// Routes
app.use("/", apiRoute);

// Start the server
app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});
