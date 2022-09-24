import { useGlobalContext } from "./context"

const EditTodo = () => {
    const { submitEdit, preEditInfo } = useGlobalContext();

    return (
        <form id="edit-todo-form">
           <label>Order Number:</label>
           <p>{preEditInfo.orderNumber}</p>
           <label>Todo:</label>
           <textarea id="editedTodoDescription" defaultValue={preEditInfo.todo} autoFocus></textarea>
           <button onClick={(e) => {
               e.preventDefault()
               submitEdit(document.getElementById('editedTodoDescription').value)
           }}>Submit</button>
        </form>
    )
}

export default EditTodo
