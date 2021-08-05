const AddBBoardItem = ({setAddNewBBoardItem, addNewBBoardItem}) => {
    const addNewItemToBBoard = () => {
        setAddNewBBoardItem(true)
    }

    if (!addNewBBoardItem) {
        return (
            <button id="addBBoardItemBtn" onClick={() => addNewItemToBBoard()}>
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
