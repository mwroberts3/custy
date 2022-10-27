import DeleteBBItem from './DeleteBBItem'
import EditBBItem from './EditBBItem'
import { useGlobalContext } from '../context'

const BBoardItemContents = () => {
    const { selectedBBoardItemContents, setAddNewBBoardItem, deleteBBoardItemFromArray, bbEditCheck, prevBbName } = useGlobalContext();

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

    const {name, desc} = selectedBBoardItemContents;
    return (
        <div className="bboard-item-contents-container hidden">
            <h2>{name}</h2>
            <div className="bboard-item-contents" dangerouslySetInnerHTML={{__html: desc}}>
            </div>

            <div style={{marginTop: '20px'}}>
                <DeleteBBItem deleteBBoardItemFromArray={deleteBBoardItemFromArray}/>
                <EditBBItem editBBItemFunc={editBBItemFunc} />
            </div>
            {/* <div>
                <small><em>(click inside this popup to close)</em></small>
            </div> */}
        </div>
    )
}

export default BBoardItemContents
