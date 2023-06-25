import { useGlobalContext } from "../context"

const AddBBoardItem = () => {
    const { addTodo, setAddNewBBoardItem, addNewBBoardItem, editCheck, bbEditCheck, currentBboardItem } = useGlobalContext();

    if (!addNewBBoardItem) {
        return (
            <button id="addBBoardItemBtn" onClick={() => {
                if (!addTodo && !editCheck) {
                    bbEditCheck.current = false
                    setAddNewBBoardItem(true)
                }
            }}>
                Add Board Item
            </button>
        )
    } else {
        return (
            <button id="addBBoardItemBtn" onClick={() => {
                currentBboardItem.current.classList = "bboard-item-contents-container hidden";
                setAddNewBBoardItem(false);
            }}>
                <strong>Close</strong>
            </button>
        )
    }
}

export default AddBBoardItem
