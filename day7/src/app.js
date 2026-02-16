
const express = require("express");
const NoteModel = require("./models/notes.models");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/notes",  async (req, res) => {
    const { title, description } = req.body;

 const Note = await NoteModel.create({
         title, description })

         res.status(201).json({
            message: "Note created successfully",
            note: Note,
         });

         app.get("/notes", async (req, res) => {
            const notes = await NoteModel.find();
            res.status(200).json({
                message: "Notes retrieved successfully",
                notes: notes,
            }); 
         })

});


module.exports = app;

