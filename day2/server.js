const express = require('express');

const app = express(); // server  instance create karna

app.get('/',(req, res) => {
    res.send('Hello World!') // response bhejna
});

app.get("/about",(req, res) => {
    res.send('This is About Page') // response bhejna
});
app.get("/contact",(req, res) => {
    res.send('This is Contact Page') // response bhejna
});

app.listen(4000) // server ko Start karna // node server.js --port 4000> but use npx nodemon server.js