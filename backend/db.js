const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/enotes";

const connectToMongo = () => {
  mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log(e.message));
};

module.exports = connectToMongo;


   