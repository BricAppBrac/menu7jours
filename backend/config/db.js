const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log("BDD MongoDB connectée");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;

// const connectDB = async (_client) => {
//   // create a new connection if one doesn't already exist
//   if (!_client) {
//     mongoose.set("strictQuery", false);
//     _client = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("BDD MongoDB connectée");
//   }

//   return _client;
// };

// const close = async (_client) => {
//   // destroy the connection if it exists
//   if (_client) {
//     await _client.disconnect();
//     _client = null;
//   }
// };

// module.exports = {
//   connectDB,
//   close,
// };
