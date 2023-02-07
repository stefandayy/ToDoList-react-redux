import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';


const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });
  return (
    <div className="my-5 d-flex justify-content-center">
      <ListGroup variant="flush" style={{width:"80rem"}}>
      {todos.map((todo) => (
         <TodoItem id={todo.id} title={todo.name} completed={todo.completed} />
      ))}
    </ListGroup>
    </div>
  );
};

export default TodoList;
