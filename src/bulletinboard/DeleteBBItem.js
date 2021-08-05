const DeleteBBItem = ({bboardItemArray, setBboardItemArray}) => {
    const deleteBBoardItemFromArray = (e) => {
        let itemToBeDeleted = e.target.parentNode.childNodes[0].textContent

        bboardItemArray = bboardItemArray.filter((item) => item.name !== itemToBeDeleted)

        localStorage.setItem('bulletinBoard', JSON.stringify(bboardItemArray))

        setBboardItemArray(bboardItemArray)
    }

    return (
        <button onClick={(e) => {
            deleteBBoardItemFromArray(e)
        }}>
            Delete
        </button>
    )
}

export default DeleteBBItem
