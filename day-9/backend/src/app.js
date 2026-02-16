const express = require('express');



const Note = require("../models/note.model");
const noteModel = require('../models/note.model');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body;

  const note = await Note.create({
     title, description })
  res.status(201).json({
    message: 'Note created successfully',
    note: note
  });
})

app.get('/api/notes', async (req, res) => {
   const notes = await noteModel.find()

    res.status(200).json({
        message: 'Notes fetched successfully',
        notes: notes
})
})

app.delete('/api/notes/:id', async (req, res) => {
   const id = req.params.id;

   await noteModel.findByIdAndDelete(id);

   console.log(id)
   res.status(200).json({
    message: 'Note deleted successfully',
    id: id
   })
})


app.patch('/api/notes/:id', async (req, res) => {
    const id = req.params.id;
    const {  description } = req.body;

await noteModel.findByIdAndUpdate(id, { description })
res.status(200).json({
    message: 'Note updated successfully',
    id: id})
})


module.exports = app;