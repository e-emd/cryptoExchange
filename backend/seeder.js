import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import User from './models/userModel.js';
import users from './data/user.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

    console.log('Data imported!'.bgGreen.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log('DATA DESTROYED'.magenta.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
