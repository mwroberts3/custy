const AddTodo = ({showEditTodoForm, addTodo, editCheck, addNewBBoardItem, setAddTodo}) => {
    if (addTodo || editCheck) {
        if (addTodo && !editCheck) {
            return (<button id="addTodoBtn" onClick={() => setAddTodo(!addTodo)}>Close</button>)
        } else {
            return (<button id="addTodoBtn" onClick={() => showEditTodoForm()}>Close</button>)
        }
    } else {
        return (<button id="addTodoBtn" onClick={() => {
            if (!addNewBBoardItem) {
                setAddTodo(!addTodo)
            }
        }}>Add Todo</button>)
    }
}

export default AddTodo
