const express = require("express");
const { connectDB } = require("./db.config");
const menuRoute = require("./routes/menuRoute");
const cors = require("cors");

require("dotenv").config();


const app = express();
const SERVERPORT = process.env.SERVER_PORT || 3000;
const CLIENTPORT = process.env.CLIENT_PORT || 5173;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: CLIENTPORT,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: "GET,PUT,POST,DELETE",
};



connectDB();

app.use(cors(corsOptions));

app.use("/menu", menuRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// app.get("/", homeRoute);

// Start the server
app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});

module.exports = app;
