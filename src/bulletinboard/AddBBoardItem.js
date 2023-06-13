import { useGlobalContext } from "../context"

const AddBBoardItem = () => {
    const { addTodo, setAddNewBBoardItem, addNewBBoardItem, editCheck, bbEditCheck, currentBboardItem } = useGlobalContext();

    console.log(currentBboardItem);

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
                console.log('this is a test');
                currentBboardItem.current.classList = "bboard-item-contents-container hidden";
                setAddNewBBoardItem(false);
            }}>
                <strong>Close</strong>
            </button>
        )
    }
}

export default AddBBoardItem
