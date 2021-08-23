import BBoardItem from './BBoardItem';
import DeleteBBItem from './DeleteBBItem'
import EditBBItem from './EditBBItem'

const BBoardItemContents = ({contents, bboardItemArray, setBboardItemArray, setAddNewBBoardItem}) => {
    const deleteBBoardItemFromArray = (e, fromEdit) => {
        let itemToBeDeleted = e.target.parentNode.parentNode.childNodes[0].textContent;

        console.log(itemToBeDeleted)

        bboardItemArray = bboardItemArray.filter((item) => item.name !== itemToBeDeleted)

        localStorage.setItem('bulletinBoard', JSON.stringify(bboardItemArray))

        setBboardItemArray(bboardItemArray)
    }

    const editBBItemFunc = (e) => {
        console.log(e.target.parentNode.parentNode.children[0].textContent)
        console.log(e.target.parentNode.parentNode.children[1].textContent)

        deleteBBoardItemFromArray(e, true)

        setAddNewBBoardItem(true)
        
        setTimeout(() => {
            document.getElementById('bbItemHeader').value = e.target.parentNode.parentNode.children[0].textContent

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
