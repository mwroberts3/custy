const AddBBoardItem = ({setAddNewBBoardItem, addNewBBoardItem, addTodo, editCheck}) => {
    if (!addNewBBoardItem) {
        return (
            <button id="addBBoardItemBtn" onClick={() => {if (!addTodo && !editCheck) setAddNewBBoardItem(true)}}>
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
