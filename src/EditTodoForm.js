const EditTodo = ({submitEdit, orderNumber, todo}) => {
    return (
        <form id="edit-todo-form">
           <label>Order Number:</label>
           <p>{orderNumber}</p>
           <label>Todo:</label>
           <textarea id="editedTodoDescription" defaultValue={todo} autoFocus></textarea>
           <button onClick={(e) => {
               e.preventDefault()
               submitEdit(document.getElementById('editedTodoDescription').value)
           }}>Submit</button>
        </form>
    )
}

export default EditTodo
