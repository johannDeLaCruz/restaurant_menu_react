const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db.config");
const menuRoute = require("./routes/menuRoute");

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});
