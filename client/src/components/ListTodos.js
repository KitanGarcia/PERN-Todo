import React, {Fragment, useEffect, useState} from "react";

//This component will handle listing todo items retrieved from the backend

const ListTodos = () => {
  const [todos, setTodos] = useState([]);// react hook. Declare state variable todos initialized to an empty array
  //useState() always returns an array with the first variable being the initialized value specified and the 2nd one being the function to REPLACE (not necessarily update) it

  const getTodos = async() => {
    try {
      const response  = await fetch("http://localhost:5000/todos"); //fetch is GET by default; nothing else needed

      const jsonData = await response.json();

      setTodos(jsonData);//updates state variable todos with jsonData aka the response from the GET request
      //todos are now accessible in the component since it's a state variable

      //Another way of getting todos
      /*
      var todos = [];
      for (let i = 0; i < jsonData.length; i++) {
        var id = jsonData[i].todo_id;

        todos.push({id: jsonData[i].description});
      }
      console.log(todos);
      */
      
    }
    catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []); //adding ,[] will make useEffect only execute once as opposed to constantly
  //useEffect() runs imperative code immediately after every completed render

//  console.log(todos);
  

  const deleteTodo = async(id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      console.log(deleteTodo);

      setTodos(todos.filter(todo => todo.todo_id !== id)); //will rerender all todos except for the one delete (and passed in as a parameter to this function)
    }
    catch(err) {
      console.error(err.message);
    }
  }

  return <Fragment>
    {" "}
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Todo ID</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.todo_id}>
          <td>{todo.todo_id}</td>
          <td>{todo.description}</td>
          <td>
            <button className="btn">
              Edit
            </button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>
              Delete
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  </Fragment>;
};

export default ListTodos;
