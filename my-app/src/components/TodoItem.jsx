import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/tasksSlice";
import { CheckSquareFill, TrashFill } from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  return (
    <>
      <ListGroup.Item>
        <span className={`${completed && "completed"}`}>{title}</span>
        <Button variant="danger" onClick={removeTask} className="float-end">
          {" "}
          <TrashFill />{" "}
        </Button>{" "}
        <Button
          variant="warning"
          onClick={handleCheckboxClick}
          className="float-end me-1"
        >
          <CheckSquareFill />
        </Button>
      </ListGroup.Item>
    </>
  );
};

export default TodoItem;
