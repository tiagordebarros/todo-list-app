function TodoItem({ task, complete, id }) {
  return(
    <div>
      <label htmlFor="todo-item">
      <input type="checkbox" name="todo-item" id="todo-item" onChange={ () => complete(id) } />
      <span>{ task }</span>
      </label>
    </div>
  )
}

export default TodoItem;
