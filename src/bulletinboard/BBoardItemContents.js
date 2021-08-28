import DeleteBBItem from './DeleteBBItem'
import EditBBItem from './EditBBItem'

const BBoardItemContents = ({contents, setAddNewBBoardItem, deleteBBoardItemFromArray, setBBItemToBeDeleted, bbItemToBeDeleted}) => {
    const editBBItemFunc = (e) => {
        // console.log(e.target.parentNode.parentNode.children[0].textContent)
        // console.log(e.target.parentNode.parentNode.children[1].textContent)

        setAddNewBBoardItem(true)
        
        setBBItemToBeDeleted(e.target.parentNode.parentNode.children[0].textContent)

        setTimeout(() => {
            document.getElementById('bbItemHeader').value = e.target.parentNode.parentNode.children[0].textContent

            bbItemToBeDeleted = e.target.parentNode.parentNode.children[0].textContent

            console.log(bbItemToBeDeleted)

            document.getElementById('newBBItemContent').value = e.target.parentNode.parentNode.children[1].textContent
        },50)
    }

    return (
        <div className="bboard-item-contents-container hidden">
            <h2>{contents.name}</h2>
            <div className="bboard-item-contents" dangerouslySetInnerHTML={{__html: contents.desc}}>
            </div>
            <div style={{marginTop: '20px'}}>
                <small><em>click inside this popup to close</em></small>
            </div>
            <div>
                <DeleteBBItem deleteBBoardItemFromArray={deleteBBoardItemFromArray}/>
                <EditBBItem editBBItemFunc={editBBItemFunc} />
            </div>
        </div>
    )
}

export default BBoardItemContents
