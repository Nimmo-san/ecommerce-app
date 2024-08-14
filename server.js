const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Basic Route
app.get('/', (req, res) => {
    res.send('E-commerce API running');
});

const PORT = process.env.PORT || 5001; // PORT can be taken from .env or here
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

