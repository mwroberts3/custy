const EditBBItem = ({editBBItemFunc}) => {
    return (
        <button onClick={(e) => {editBBItemFunc(e)}}>
         Edit   
        </button>
    )
}

export default EditBBItem
