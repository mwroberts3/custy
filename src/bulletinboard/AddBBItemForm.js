const AddBBItemForm = ({ bboardItemArray, setAddNewBBoardItem }) => {
    const submitBBoardItem = (e) => {
        e.preventDefault()
        let tempBBoardItemArray = bboardItemArray

        let tempBBoardItem = {name: document.querySelector('#bbItemHeader').value, desc: document.querySelector('#newBBItemContent').value}

        if (tempBBoardItem.name !== '' && tempBBoardItem.desc !== '') {
            tempBBoardItemArray.push(tempBBoardItem)

            localStorage.setItem('bulletinBoard', JSON.stringify(tempBBoardItemArray))
        }

        setAddNewBBoardItem(false)

        document.querySelector('#add-bbitem-form').classList.add('hidden')
    }

    return (
        <form id="add-bbitem-form">
           <label>Header:</label>
           <input id="bbItemHeader" type="text" autoFocus/> 
           <label>Content (html):</label>
           <textarea id="newBBItemContent"></textarea>
           <button onClick={(e)=>{
               submitBBoardItem(e)
           }}>Submit</button>
        </form>
    )
}

export default AddBBItemForm
