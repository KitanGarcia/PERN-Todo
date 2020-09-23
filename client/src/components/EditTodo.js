import React, {Fragment, useState} from "react";

//This component will handle editing a todo item

const EditTodo = ({todo}) => {
  //todo is passed in as a prop from ListTodos.js. Destructured above

  const [description, setDescription] = useState(todo.description); //set to description by default

  //update description
  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      console.log(todo);
      const editResponse = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(editResponse);

      window.location = "/"; //refresh to show updated description
    }
    catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
            </div>

            <div className="modal-body">
              <input type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Update</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(description)}>Cancel</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
