import { useState } from "react";
import AddTodoButton from "../components/AddTodoButton";
import TodoItem from "../components/TodoItem";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const getTaskList = (task) => {
    setTodoList((prevState) => {
      return [...prevState, { id: uuidv4(), task }];
    });
  };

  const finishedTask = (id) => {
    setTodoList((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <AddTodoButton taskList={getTaskList} />
      {todoList &&
        todoList.map(({ id, task }) => (
          <TodoItem key={id} id={id} task={task} complete={finishedTask} />
        ))}
    </>
  );
}

export default TodoList;
