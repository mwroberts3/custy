import DeleteBBItem from './DeleteBBItem'

const BBoardItemContents = ({contents, bboardItemArray, setBboardItemArray}) => {
    return (
        <div className="bboard-item-contents-container hidden">
            <h2>{contents.name}</h2>
            <div className="bboard-item-contents" dangerouslySetInnerHTML={{__html: contents.desc}}>
            </div>
            <div style={{marginTop: '20px'}}>
                <small><em>click inside this popup to close</em></small>
            </div>
            <DeleteBBItem bboardItemArray={bboardItemArray} setBboardItemArray={setBboardItemArray}/>
        </div>
    )
}

export default BBoardItemContents
