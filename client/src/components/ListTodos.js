import React, {Fragment, useEffect, useState} from "react";

//This component will handle listing todo items retrieved from the backend

const ListTodos = () => {

  const [todos, setTodos] = useState([]);// react hook. Declare state variable todos initialized to an empty array
  //useState() always returns an array with the first variable being the initialized value specified and the 2nd one being the function to REPLACE (not necessarily update) it

  const getTodos = async() => {
    try {
      const response  = await fetch("http://localhost:5000/todos"); //fetch is GET by default; nothing else needed

      const jsonData = await response.json();
      console.log("JSON data:");
//      console.log(jsonData);

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
          <tr>
          <td>{todo.todo_id}</td>
          <td>{todo.description}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
        ))}
      </tbody>
    </table>
  </Fragment>;
};

export default ListTodos;
