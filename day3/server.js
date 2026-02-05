const express = require("express");

const app = express();

app.use(express.json());


const notes =[]

//git remote add origin https://github.com/ADII007s/backend.git

app.post("/notes",(req,res)=>{

    console.log(req.body);

    notes.push(req.body);

  res.send("Note created");
})

app.get("/notes",(req,res)=>{

    res.json(notes);
})


app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})