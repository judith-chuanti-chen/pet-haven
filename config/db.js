const mongoose = require('mongoose');
const config = require('../config/config').get(process.env.NODE_ENV);

const connectDB = () => {
    mongoose.connect(config.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
    console.log('MongoDB Connected');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

module.exports = connectDB;
