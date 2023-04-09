function TodoItem({ task }) {
  return(
    <div>
      <input type="checkbox" name="todo-item" id="todo-item" />
      <span>{ task }</span>
    </div>
  )
}

export default TodoItem;
