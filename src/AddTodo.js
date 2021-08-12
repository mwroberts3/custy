const AddTodo = ({addTodo, editCheck, addNewBBoardItem, setAddTodo, setEditCheck}) => {
    if (addTodo || editCheck) {
        if (addTodo && !editCheck) {
            return (<button id="addTodoBtn" onClick={() => setAddTodo(!addTodo)}>Close</button>)
        } else {
            return (<button id="addTodoBtn" onClick={() => setEditCheck(!editCheck)}>Close</button>)
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
