This project will be an implementation of a Todo List application using the PERN stack (Postgres, Express, React, Node). More to follow!

To launch postgres as superadmin (user called postgres), use:
```
psql -U postgres
```
**Postgres Commands:**  
* ```\l``` lists all databases  
* ```\c``` moves inside a database  
* ```\dt``` shows tables in a database
* ```SELECT * FROM todo;``` shows all entries in the todo table
* ```DELETE FROM todo WHERE todo_id = 2;``` deletes entry with stated todo_id
* ```UPDATE todo SET todo_id = 2 WHERE todo_id = 3;``` changes todo_id of 3 to todo_id of 2
* ```INSERT INTO todo (todo_id, description) VALUES ('3', 'I need to get more sleep');``` adds entry to todo table with todo_id 3 and description as listed
