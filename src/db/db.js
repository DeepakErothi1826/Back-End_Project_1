const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("mongodb://new:soGF7q3fjkMv2VZL@ac-1fotvgc-shard-00-00.4buhnpx.mongodb.net:27017,ac-1fotvgc-shard-00-01.4buhnpx.mongodb.net:27017,ac-1fotvgc-shard-00-02.4buhnpx.mongodb.net:27017/Project-1?replicaSet=atlas-i2eu8c-shard-0&ssl=true&authSource=admin")

    console.log("connect to DB");
    
}

module.exports = connectDB;