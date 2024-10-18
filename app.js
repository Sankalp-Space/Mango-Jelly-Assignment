const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const comicRoutes = require('./routes/comicsRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', comicRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
