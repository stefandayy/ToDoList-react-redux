import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';


const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });
  return (
    <>
      <ListGroup variant="flush" className="m-3">
      {todos.map((todo) => (
         <TodoItem id={todo.id} title={todo.name} completed={todo.completed} />
      ))}
    </ListGroup>
    </>
  );
};

export default TodoList;
