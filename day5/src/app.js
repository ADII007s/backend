const express = require('express');
const { log } = require('three');

const app = express();

const notes = [
 ]
 app.post('/notes', (req, res) => {
    console.log(req.body);

 });




module.exports = app;