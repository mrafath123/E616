const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://192.168.135.97:8081'
}));

// MongoDB Atlas connection URI
const MONGODB_URI = "mongodb+srv://rafath1234:rafath1234@cluster0.yjfhw6p.mongodb.net/e616?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

const sightingSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Sighting = mongoose.model('sightings', sightingSchema);

app.post('/', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const sighting = new Sighting({ latitude, longitude });
    await sighting.save();
    res.status(201).json({ message: 'Sighting reported successfully' });
  } catch (error) {
    console.error('Error reporting sighting:', error);
    res.status(500).json({ error: 'Failed to report sighting' });
  }
});

app.get('/api/sightings', async (req, res) => {
  try {
    const sightings = await Sighting.find().sort('-date');
    res.json(sightings);
  } catch (error) {
    console.error('Error fetching sightings:', error);
    res.status(500).json({ error: 'Failed to fetch sightings' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Here you can implement your own authentication logic, like checking against a database
    // For simplicity, let's assume a hardcoded check
    if (username === 'admin' && password === 'password') {
      // For simplicity, generate a simple token
      const token = 'fake_token';
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
