const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db'); //connect to the db

//middleware
app.use(cors()); //allows different domain applications to interact with each other
app.use(express.json()); //gives access to req.body

//ROUTES

//create a todo
app.post('/todos', async(req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
    //insert Value 1 (which is description) into todo table in the description column
    //RETURNING * returns back the data in the database
    
    res.json(newTodo.rows[0]);
    //res.json(newTodo);

  } catch (err) {
    console.error(err.message);
  }
});

//get all todos
app.get('/todos', async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    //console.log(allTodos.rows);
    res.json(allTodos.rows); //sends to back to client
  }
  catch (err) {
    console.error(message);
  }
});

//get a todo
app.get('/todos/:id', async(req, res) => {
  try {
    console.log(req.params); //will log what client sends as ID
    //for above, use http://localhost:5000/todos/{id#} on clientside to observe

    const {id} = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]); //select todo ID from table matching the ID parameterized by the client

    res.json(todo.rows[0]);
  }
  catch(err) {
    console.error(err.message)
  }
});

//update a todo
app.put('/todos/:id', async(req, res) => {
  try {
    //console.log(req.params); //will log what client sends as ID
    //for above, use http://localhost:5000/todos/{id#} on clientside to observe

    const {id} = req.params;
    const {description} = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]); //Update a todo description based on todo_id

    res.json("Todo " + id + " has been updated with: " + description);
  }
  catch(err) {
    console.error(err.message)
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
