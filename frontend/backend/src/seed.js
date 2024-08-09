const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const createUsers = async () => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Visitor123', salt);
    await User.create({ username: 'Visitor', password: hashedPassword });

    console.log('Users created');
    process.exit();
  } catch (error) {
    console.error('Error creating users:', error);
    process.exit(1);
  }
};

connectDB().then(createUsers);

