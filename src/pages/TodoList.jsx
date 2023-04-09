import { useState } from "react";
import AddTodoButton from "../components/AddTodoButton";
import TodoItem from "../components/TodoItem";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const getTaskList = (task) => {
    setTodoList((prevState) => {
      return [...prevState, task]
    })
  }

  return(
  <>
  <AddTodoButton taskList={ getTaskList } />
  { todoList && todoList.map((todo, index) => (
    <TodoItem key={ index } task={ todo } />
  )) }
  </>
  )
}

export default TodoList;
