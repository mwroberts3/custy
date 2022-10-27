import { useGlobalContext } from "../context"

const BBoardItem = ({name, desc}) => {
    const { setSelectedBBoardItemContents, setAddNewBBoardItem } = useGlobalContext();

    const applyBBItemContent = (desc, name) => {
        document.querySelector('.bboard-item-contents-container').classList.remove('hidden');

        setAddNewBBoardItem(true);
        setSelectedBBoardItemContents({name, desc})
    }

    return (
        <div className="bulletin-board-item" onClick={() => {applyBBItemContent(desc, name)}}>
            {name} 
        </div>
    )
}

export default BBoardItem
