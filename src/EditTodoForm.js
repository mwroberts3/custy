const EditTodo = ({submitEdit, orderNumber, todo}) => {
    console.log(orderNumber, todo)

    return (
        <form id="add-todo-form">
           <label>Order Number:</label>
           <p>{orderNumber}</p>
           <label>Todo:</label>
           <textarea id="editedTodoDescription" defaultValue={todo}></textarea>
           <button onClick={(e) => {
               submitEdit(document.getElementById('editedTodoDescription').value)
           }}>Submit</button>
        </form>
    )
}

export default EditTodo
