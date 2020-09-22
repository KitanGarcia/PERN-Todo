import React, {Fragment, useState} from "react";

//This component will handle entering a todo item and posting it to the backend.

const InputTodo = () => {
  const [description, setDescription] = useState(""); // react hook. Declare state variable description initialized to an empty string
  //useState() always returns an array with the first variable being the initialized value specified and the 2nd one being the function to REPLACE (not necessarily update) it

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      //server is running on port 5000

      console.log(response);

      window.location = "/"; //once the response is sent, the page will refresh and show the change
    }
    catch (err) {
      console.error(err.message);
    }
  }

   return (
     <Fragment>
       <h1 className = "text-center mt-5">Input Todo</h1>
       <form className = "d-flex mt-5" onSubmit={onSubmitForm}>
         <input 
           type = "text" 
           className = "form-control"
           value={description} 
           onChange={e => setDescription(e.target.value)}
         />
         <button className  = "btn btn-success">Add</button>
       </form>
     </Fragment>
   );
}

export default InputTodo;
