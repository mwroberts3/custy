const AddTodo = ({showAddTodoForm, addTodo, editCheck}) => {
    console.log(addTodo)
    if (addTodo || editCheck) {
        if (addTodo) {
            return (<button id="addTodoBtn" onClick={() => showAddTodoForm()}>Close</button>)
        } else {
            return (<button id="addTodoBtn" onClick={() => showAddTodoForm()}>EDIT CLOSE</button>)
        }
    } else {
        return (<button id="addTodoBtn" onClick={() => showAddTodoForm()}>Add Todo</button>)
    }
}

export default AddTodo
