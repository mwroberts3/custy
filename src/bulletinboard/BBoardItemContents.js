import { useGlobalContext } from '../context';
import { useRef } from 'react';

const BBoardItemContents = () => {
    const { selectedBBoardItemContents, deleteBBoardItemFromArray, currentBboardItem } = useGlobalContext();

    const { name, desc } = selectedBBoardItemContents;

    const bbItemContents = useRef(null);
    bbItemContents.current.innerHTML = desc;

    return (
        <div className="bboard-item-contents-container hidden" ref={currentBboardItem}>
            <h2>{name}</h2>
            <div className="bboard-item-contents" ref={bbItemContents}>
            </div>

            <div style={{ marginTop: '20px' }}>
                <button onClick={(e) => {
                    deleteBBoardItemFromArray(e.target.parentNode.parentNode.childNodes[0].textContent)
                }}>
                    Delete
                </button>
                <button>
                    Edit
                </button>
            </div>
        </div>
    )
}

export default BBoardItemContents
