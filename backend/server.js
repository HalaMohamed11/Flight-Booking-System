const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const flightRoutes = require('./routes/flightRoutes');
app.use('/api/flights', flightRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});