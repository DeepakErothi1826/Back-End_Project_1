const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect(process.env.MONGODB_URL  )

    console.log("connect to DB");
    
}

module.exports = connectDB;