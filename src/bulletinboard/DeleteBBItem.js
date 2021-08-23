const DeleteBBItem = ({deleteBBoardItemFromArray}) => {
    return (
        <button onClick={(e) => {
            deleteBBoardItemFromArray(e, false)
        }}>
            Delete
        </button>
    )
}

export default DeleteBBItem
