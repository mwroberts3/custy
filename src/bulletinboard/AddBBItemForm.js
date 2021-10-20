const AddBBItemForm = ({ bboardItemArray, setAddNewBBoardItem, setBboardItemArray, bbEditCheck}) => {
    const submitBBoardItem = (e) => {
        e.preventDefault()
        let tempBBoardItemArray = bboardItemArray

        console.log(bbEditCheck)

        let tempBBoardItem = {name: document.querySelector('#bbItemHeader').value, desc: document.querySelector('#newBBItemContent').value}

        let dupeCheck = []

        // make sure new bulletin board item isn't a duplicate
        dupeCheck = tempBBoardItemArray.filter((item) => item.name === tempBBoardItem.name)

        if (dupeCheck.length >= 1 && !bbEditCheck.current) {
            alert('bulletin board item with that name already exists, please choose a different name')
        } else {
            // don't allow dupiclate if it's a bulletin board item edit
            tempBBoardItemArray = tempBBoardItemArray.filter((item) => item.name !== tempBBoardItem.name)

            console.log(tempBBoardItemArray)

            if (tempBBoardItem.name !== '' && tempBBoardItem.desc !== '') {

                tempBBoardItemArray.push(tempBBoardItem)

                console.log(tempBBoardItemArray)

                localStorage.setItem('bulletinBoard', JSON.stringify(tempBBoardItemArray))
            }

        setBboardItemArray(tempBBoardItemArray)
        setAddNewBBoardItem(false)
        }
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
