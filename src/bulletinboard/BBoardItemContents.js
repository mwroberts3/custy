import DeleteBBItem from './DeleteBBItem'
import EditBBItem from './EditBBItem'

const BBoardItemContents = ({contents, setAddNewBBoardItem, deleteBBoardItemFromArray, bbEditCheck, prevBbName}) => {
    const editBBItemFunc = (e) => {
        setAddNewBBoardItem(true)
        bbEditCheck.current = true

        setTimeout(() => {
            prevBbName.current = e.target.parentNode.parentNode.children[0].textContent
            document.getElementById('bbItemHeader').value = e.target.parentNode.parentNode.children[0].textContent
            
            let bbContentHtml = e.target.parentNode.parentNode.children[1].innerHTML
            document.getElementById('newBBItemContent').value = bbContentHtml
        },50)
    }

    return (
        <div className="bboard-item-contents-container hidden">
            <h2>{contents.name}</h2>
            <div className="bboard-item-contents" dangerouslySetInnerHTML={{__html: contents.desc}}>
            </div>

            <div style={{marginTop: '20px'}}>
                <DeleteBBItem deleteBBoardItemFromArray={deleteBBoardItemFromArray}/>
                <EditBBItem editBBItemFunc={editBBItemFunc} />
            </div>
            <div>
                <small><em>(click inside this popup to close)</em></small>
            </div>
        </div>
    )
}

export default BBoardItemContents
