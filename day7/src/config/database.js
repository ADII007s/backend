const mongoose = require("mongoose");

function connectoDB() {
    mongoose.connect("mongodb+srv://db_database2:Wr5ASrIVp1dwBkgz@cluster0.ybtpu3i.mongodb.net/day-7")
    .then(() => {
        console.log("Connected to the database");
    })
    
}

module.exports = connectoDB;