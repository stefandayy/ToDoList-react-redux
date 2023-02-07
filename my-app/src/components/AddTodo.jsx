import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );

    setValue("");
  };

  const onSubmitEnter = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };
  return (
    <div className="mx-2 d-flex justify-content-center">
      <InputGroup style={{ maxWidth: "50rem" }}>
        <Form.Control
          placeholder="Add Task"
          aria-label="Add Task"
          aria-describedby="basic-addon2"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onSubmitEnter}
        />
        <Button variant="outline-primary" id="button-addon2" onClick={onSubmit}>
          Save
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddTodo;
