import { useState } from "react";

function AddTodoButton({ taskList }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  }

  const handleClick = () => {
    taskList(task);
    setTask("");
  }

  return(
    <form>
      <input type="text" name="task" id="task" value={ task } placeholder="Nova tarefa" onChange={ handleChange } />
      <button type="button" onClick={ handleClick }>
        Adicionar
      </button>
    </form>
  )
}

export default AddTodoButton;
