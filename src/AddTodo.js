import { useGlobalContext } from "./context";

const AddTodo = () => {
    const {addTodo, setAddTodo, editCheck, setEditCheck, addNewBBoardItem} = useGlobalContext();

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
