const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const mongoDB = 'mongodb://localhost:27017/nodecrud';

mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose
