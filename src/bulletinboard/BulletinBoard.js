import BBoardItem from './BBoardItem'
import BBoardSpacer from './BulletinBoardSpacer'

const BulletinBoard = ({bboardItemArray, setBboardItemArray, setSelectedBBoardItemContents}) => {
    // sort bulletin board in alphabetical order
    bboardItemArray.sort(function(a, b){ 
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1
        } else if (a.name.toUpperCase() > b.name.toUpperCase()){
            return 1 
        } else {
            return 0
        }
    })

    return (
        <div id="bulletin-board">
            {bboardItemArray.map((bboard, index) => (
                <div className="bboard-item-container" key={index}>
                <BBoardItem  name={bboard.name} desc={bboard.desc}
                setSelectedBBoardItemContents={setSelectedBBoardItemContents}
                /> 
                {index < bboardItemArray.length -1 && <BBoardSpacer />}
                </div>
            ))}
        </div>
    )
}

export default BulletinBoard
