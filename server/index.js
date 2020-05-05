const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');//connect to the db

//middleware
app.use(cors());
app.use(express.json());//gives access to request.body

//ROUTES
//create a todo
app.post('/todos', async(req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo () (description) VALUES($1) RETURNING *", [description]
    );
    //insert Value 1 (which is description) into todo table in the description column
    //RETURNING * returns back the data in the database
    res.json(newTodo.rows[0]);
    res.json(newTodo);

  } catch (err) {
    console.error(err.message);
  }
});

//get all todos
app.get('/todos', async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  }
  catch (err) {
    console.error(message);
  }
});
//get a todo
//
//update a todo

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
