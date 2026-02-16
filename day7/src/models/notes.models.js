const mongoose = require("mongoose");
const { mod } = require("three/tsl");

const noteSchema = new mongoose.Schema({
  title: String,
  description:  String,
});

 const NoteModel = mongoose.model("Note", noteSchema);

 module.exports = NoteModel;