function AddTodoButton() {
  return(
    <form>
      <input type="text" name="task" id="task" placeholder="Nova tarefa" />
      <button type="button">
        Adicionar
      </button>
    </form>
  )
}

export default AddTodoButton;
