const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:1234@datacluster.6i0bay9.mongodb.net/?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
