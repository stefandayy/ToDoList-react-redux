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
  return (
    <div className="m-3 text-center">
      <InputGroup>
        <Form.Control
          placeholder="Add Task"
          aria-label="Add Task"
          aria-describedby="basic-addon2"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          variant="outline-primary"
          id="button-addon2"
          onClick={onSubmit}
        >
          Save
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddTodo;
