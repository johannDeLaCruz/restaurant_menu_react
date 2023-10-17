const express = require("express");
const connectDB = require("./db.config");
const menuRoute = require("./controllers/menu.js");
const cors = require("cors");

require("dotenv").config();

const app = express();
const SERVERPORT = process.env.SERVER_PORT || 3000;
const CLIENTPORT = process.env.CLIENT_PORT || 5173;
app.use(cors({ origin: `http://localhost:${CLIENTPORT}` }));

// Connect to MongoDB Atlas
connectDB();

app.use(express.json());

// Routes

app.use("/menu", menuRoute);

// app.get("/", homeRoute);

// Start the server
app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});
