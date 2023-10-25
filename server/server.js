const express = require("express");
const { connectDB } = require("./db.config");
const menuRoute = require("./controllers/menu.js");
const cors = require("cors");
// const path = require('path');

require("dotenv").config();

const app = express();
const SERVERPORT = process.env.SERVER_PORT || 3000;
const CLIENTPORT = process.env.CLIENT_PORT || 5173;
app.use(cors({ origin: `http://localhost:${CLIENTPORT}` }));

// Connect to MongoDB Atlas
connectDB();

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'client/public')));

// Routes

app.use("/menu", menuRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// app.get("/", homeRoute);

// Start the server
app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});
