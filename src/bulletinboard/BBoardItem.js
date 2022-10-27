const BBoardItem = ({name, desc, setSelectedBBoardItemContents, setAddNewBBoardItem}) => {
    const applyBBItemContent = (desc, name) => {
        document.querySelector('.bboard-item-contents-container').classList.remove('hidden')

        document.querySelector('.bboard-item-contents-container').addEventListener('click', () => {
            document.querySelector('.bboard-item-contents-container').classList.add('hidden')
        })


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
