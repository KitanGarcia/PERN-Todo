const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');//connect to the db

//middleware
app.use(cors());
app.use(express.json());//gives access to request.body

//ROUTES
//
//create a todo
//
//get all todos
//
//get a todo
//
//update a todo

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
