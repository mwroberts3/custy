const AddTodoForm = ({ addNewTodo }) => {
    return (
        <form id="add-todo-form">
           <label>Order Number:</label>
           <input id="newTodoOrderNumber" type="text" /> 
           <label>Todo:</label>
           <textarea id="newTodoDescription"></textarea>
           <button onClick={(e) => {
               addNewTodo(document.getElementById('newTodoOrderNumber').value, document.getElementById('newTodoDescription').value)}}>Submit</button>
        </form>
    )
}

export default AddTodoForm
