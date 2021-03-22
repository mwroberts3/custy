import { useState, useEffect } from 'react'
import CSCard from './CSCard'

// localStorage.setItem('todos', JSON.stringify([
//     {   orderNumber: 1374562,
//         date: new Date().toString().substring(0, 15),
//         todo: 'email custy when nw confirms cancellation',
//         urgent: false,
//         waitingForResponse: false },
//     {   orderNumber: 1374532,
//         date: new Date().toString().substring(0, 15),
//         todo: 'email custy when nw confirms cancellation',
//         urgent: false,
//         waitingForResponse: false },
//     {   orderNumber: 1374512,
//         date: new Date().toString().substring(0, 15),
//         todo: 'email custy when nw confirms cancellation',
//         urgent: true,
//         waitingForResponse: true },
//     {   orderNumber: 13743532,
//         date: new Date().toString().substring(0, 15),
//         todo: 'email custy when nw confirms cancellation',
//         urgent: false,
//         waitingForResponse: true },
//     {   orderNumber: 'PO4524',
//         date: new Date().toString().substring(0, 15),
//         todo: 'email custy when nw confirms cancellation',
//         urgent: false,
//         waitingForResponse: false },
//     {   orderNumber: 1314532,
//         date: new Date().toString().substring(0, 15),
//         todo: 'email custy when nw confirms cancellation',
//         urgent: true,
//         waitingForResponse: true },
// ]))

const CSCardGrid = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

    // probably will have to pass a function from this component to CSCard in order to close or change status of a todo
    const setTodoUrgent = (orderNumber) => {
        todos.forEach(todo => {
            if (todo.orderNumber === orderNumber) {
                todo.urgent = !todo.urgent
            }
        })

        localStorage.setItem('todos', JSON.stringify(todos))
        setTodos(todos)
    }
    
    const setTodoWaiting = () => {
        console.log('set waiting')
    }
    
    const closeTodo = () => {
        console.log('todo closed')
    }

    return (
        <div id='customer-service-todo'>
            {todos.map((todo) => (
                <CSCard todo={todo} key={todo.orderNumber} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo}/>
            ))}
        </div>
    )
}

export default CSCardGrid
