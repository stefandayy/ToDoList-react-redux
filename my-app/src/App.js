import React from "react";
import AddTodo from "./components/AddTodo";
import FooterComponent from "./components/FooterComponent";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1 className="app-title mx-3"> My Tasks.</h1>
   
        <AddTodo />
        <TodoList />

      <FooterComponent />
    </>
  );
}

export default App;
