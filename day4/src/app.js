const express = require('express');
const { not } = require('three/tsl');

const app = express();// server create ho jata hai
app.use(express.json());// middleware jo json data ko handle kar sake
const notes = [

];


app.get('/',(req,res)=>{
    res.send("Hello World");
});  
//POST request handle karne ke liye
// notes 


app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);

    res.send("Note created");
});
// GET request handle karne ke liye name is same but work is differnt

app.get("/notes",(req,res)=>{
    res.send(notes);
});

// DELETE request handle karne ke liye
//params
app.delete("/notes/:index",(req,res)=>{
 delete notes[req.params.index];
 res.send("Note deleted");
});


// patch request handle karne ke liye
// req.body = {description : -"sample modified note "}

app.patch("/notes/:index",(req,res)=>{
notes[req.params.index].description = req.body.description;
res.send("Note updated");

});

module.exports = app;