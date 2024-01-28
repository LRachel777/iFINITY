import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import todoServices from "../services/todoServices"; //../services/todoServices";

function ToDoList({ getTodoId }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const data = await todoServices.getAllTodo();
    console.log(data.docs);
    setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await todoServices.deleteTodo(id);
    getTodos();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getTodos}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.task}</td>
                <td>{doc.comments}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getTodoId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ToDoList;
