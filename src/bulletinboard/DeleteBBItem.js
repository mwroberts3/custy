const DeleteBBItem = ({deleteBBoardItemFromArray}) => {
    return (
        <button onClick={(e) => {
            deleteBBoardItemFromArray(e.target.parentNode.parentNode.childNodes[0].textContent)
        }}>
            Delete
        </button>
    )
}

export default DeleteBBItem
