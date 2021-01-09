import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Mongo data base is now connected...`);
  } catch (error) {
    console.error(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
