const AddBBoardItem = ({setAddNewBBoardItem, addNewBBoardItem, addTodo, editCheck, bbEditCheck}) => {
    if (!addNewBBoardItem) {
        return (
            <button id="addBBoardItemBtn" onClick={() => {if (!addTodo && !editCheck) {
                bbEditCheck.current = false
                setAddNewBBoardItem(true)
                }}}>
                Add Board Item
            </button>
        )
    } else {
        return (
            <button id="addBBoardItemBtn" onClick={() => setAddNewBBoardItem(false)}>
                Close
            </button>
        )
    }
}

export default AddBBoardItem
