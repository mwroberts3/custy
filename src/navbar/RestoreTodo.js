import React from 'react'
import { FaTrashRestore } from 'react-icons/fa'

const RestoreTodo = ({restoreTodo}) => {
    if (localStorage.getItem('deleted-todos') && JSON.parse(localStorage.getItem('deleted-todos')).length > 0) {
        return (
            <div id="restore-last-todo" className="restore-enabled">
                <FaTrashRestore onClick={() => {
                    restoreTodo()
                }}/>
            </div>
        )
    } else {
        return (
            <div id="restore-last-todo">
                <FaTrashRestore onClick={() => {
                    restoreTodo()
                }}/>
            </div>
        )
    }

}

export default RestoreTodo
