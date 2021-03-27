const AddTodoForm = ({ addNewTodo }) => {
    return (
        <form id="add-todo-form">
           <label>Reference Number:</label>
           <input id="newTodoOrderNumber" type="text" autoFocus/> 
           <label>Todo:</label>
           <textarea id="newTodoDescription"></textarea>
           <button onClick={(e) => {
               e.preventDefault()
               addNewTodo(document.getElementById('newTodoOrderNumber').value, document.getElementById('newTodoDescription').value)}}>Submit</button>
        </form>
    )
}

export default AddTodoForm
