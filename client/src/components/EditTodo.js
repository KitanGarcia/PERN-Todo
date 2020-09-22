import React, {Fragment, useEffect, useState} from "react";

//This component will handle editing or deleting a todo item

const EditTodo = () => {
  const [description, setDescription] = useState(""); // react hook. Declare state variable description initialized to an empty string
  //useState() always returns an array with the first variable being the initialized value specified and the 2nd one being the function to REPLACE (not necessarily update) it

  const deleteTodo = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/todos/:id", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      //server is running on port 5000

      console.log(response);

      window.location = "/"; //once the response is sent, the page will refresh and show the change
    }
    catch (err) {
      console.error(err.message);
    }
  }
}

export default EditTodo;
