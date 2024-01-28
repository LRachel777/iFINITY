import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import todoServices from "../services/todoServices"; 

function AddToDo ({ id, setTodoId }) {
  const [task, setTask] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Todo");
  const [flag, setFlag] = useState(1);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (task === "" || comments === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newTodo = {
      task,
      comments,
      status,
      date,
    };
    console.log(newTodo);

    try {
      if (id !== undefined && id !== "") {
        await todoServices.updateTodo(id, newTodo);
        setTodoId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await todoServices.addTodo(newTodo);
        setMessage({ error: false, msg: "New Todo added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTask("");
    setComments("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await todoServices.getTodo(id);
      console.log("the record is :", docSnap.data());
      setTask(docSnap.data().task);
      setComments(docSnap.data().comments);
      setStatus(docSnap.data().status);
      setDate(docSnap.data().date);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect (() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTodoTask">
            <InputGroup>
              <InputGroup.Text id="formTodoTask">T</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="TASK"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTodoComments">
            <InputGroup>
              <InputGroup.Text id="formTodoComments">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="COMMENTS"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
          
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <InputGroup>
              <InputGroup.Text id="formDate">T</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="DATE"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
             variant="success"
              onClick={(e) => {
                setStatus("Todo");
                setFlag(1);
              }}
            >
              Todo
            </Button>
            <Button
              variant="success"
              
              onClick={(e) => {
                setStatus("Doing");
                setFlag(2);
              }}
            >
              Doing
            </Button>
            <Button
              variant="success"              
              onClick={(e) => {
                setStatus("Done");
                setFlag(3);
              }}
            >
              Done
            </Button>
            </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};       

export default AddToDo;