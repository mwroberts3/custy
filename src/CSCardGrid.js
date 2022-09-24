import CSCard from './CSCard'
import { useEffect } from 'react'
import { useGlobalContext } from './context'

const CSCardGrid = ({}) => {
    const { todos, initiateEdit, setTodoUrgent, setTodoWaiting, closeTodo, freshDeleted, setFreshDeleted } = useGlobalContext();
  
    const urgentFaviconCheck = () => {
        let tempUrgentCheck = todos.filter((todo) => !todo.urgent)

        if (todos.length !== tempUrgentCheck.length) {
            document.querySelector('link').href = "https://raw.githubusercontent.com/mwroberts3/custy/master/src/favicon2.ico"
        } else {
            document.querySelector('link').href = "https://raw.githubusercontent.com/mwroberts3/custy/master/public/favicon.ico"
        }
    }

    useEffect(urgentFaviconCheck)

    return (
        <div id='customer-service-todo'>
            {todos && todos.map((todo) => (
                <CSCard todo={todo} key={todo.orderNumber} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo} initiateEdit={initiateEdit} freshDeleted={freshDeleted} setFreshDeleted={setFreshDeleted}/>
            ))}
        </div>
    )
}

export default CSCardGrid
