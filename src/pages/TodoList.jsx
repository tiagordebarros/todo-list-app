import { useState } from "react";
import AddTodoButton from "../components/AddTodoButton";
import TodoItem from "../components/TodoItem";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const getTaskList = (task) => {
    setTodoList((prevState) => {
      return [...prevState, task];
    });
  };

  const finishedTask = (id) => {
    setTodoList((prevState) => {
      return prevState.filter((_, index) => index !== id);
    });
  };

  return (
    <>
      <AddTodoButton taskList={getTaskList} />
      {todoList &&
        todoList.map((todo, index) => (
          <TodoItem
            key={index}
            id={index}
            task={todo}
            complete={finishedTask}
          />
        ))}
    </>
  );
}

export default TodoList;
