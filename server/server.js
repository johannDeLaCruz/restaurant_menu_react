const express = require('express');
const connectDB = require('./db.config');
const apiRoute = require('./api.js');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: "http://localhost:5173" }));

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/', apiRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

