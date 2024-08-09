const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '../../../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../frontend/build/index.html'));
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});








