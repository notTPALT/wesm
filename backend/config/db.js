var mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://meancar0412:Abc12345@cluster0.4hhhzqt.mongodb.net/database';

function connectDB() {
    try {
        mongoose.connect(MONGODB_URI);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        console.log(`Database connected.`);
    });
    
    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    return;
}

module.exports = connectDB;