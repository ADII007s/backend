const mongoose = require('mongoose');   

function connectTODB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
}


module.exports = connectTODB;