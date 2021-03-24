const AddTodo = ({showAddTodoForm, addTodo}) => {
    return (
        <button onClick={() => showAddTodoForm()}>{addTodo ? 'Close' : 'Add Todo'}</button>
    )
}

export default AddTodo
