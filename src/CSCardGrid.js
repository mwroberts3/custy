import { useState } from 'react'
import CSCard from './CSCard'

const CSCardGrid = ({initiateEdit}) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

    // probably will have to pass a function from this component to CSCard in order to close or change status of a todo
    const setTodoUrgent = (orderNumber) => {
        todos.forEach(todo => {
            if (todo.orderNumber === orderNumber) {
                todo.urgent = !todo.urgent
            }
        })

        localStorage.setItem('todos', JSON.stringify(todos))
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }
    
    const setTodoWaiting = (orderNumber) => {
        todos.forEach(todo => {
            if (todo.orderNumber === orderNumber) {
                todo.waitingForResponse = !todo.waitingForResponse
            }
        })

        localStorage.setItem('todos', JSON.stringify(todos))
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }
    
    const closeTodo = (orderNumber) => {
        let editedTodos;

        editedTodos = todos.filter(todo => todo.orderNumber !== orderNumber)

        localStorage.setItem('todos', JSON.stringify(editedTodos))
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }

    return (
        <div id='customer-service-todo'>
            {todos && todos.map((todo) => (
                <CSCard todo={todo} key={todo.orderNumber} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo} initiateEdit={initiateEdit}/>
            ))}
        </div>
    )
}

export default CSCardGrid
