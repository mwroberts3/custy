const AddTodo = ({showAddTodoForm, showEditTodoForm, addTodo, editCheck}) => {
    if (addTodo || editCheck) {
        if (addTodo && !editCheck) {
            return (<button id="addTodoBtn" onClick={() => showAddTodoForm()}>Close</button>)
        } else {
            return (<button id="addTodoBtn" onClick={() => showEditTodoForm()}>Close</button>)
        }
    } else {
        return (<button id="addTodoBtn" onClick={() => showAddTodoForm()}>Add Todo</button>)
    }
}

export default AddTodo
