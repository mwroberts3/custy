import CSCard from './CSCard'

const CSCardGrid = ({initiateEdit, todos, setTodoUrgent, setTodoWaiting, closeTodo, freshDeleted, setFreshDeleted}) => {
    window.onfocus = () => {
        window.location.reload()
    }

    return (
        <div id='customer-service-todo'>
            {todos && todos.map((todo) => (
                <CSCard todo={todo} key={todo.orderNumber} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo} initiateEdit={initiateEdit} freshDeleted={freshDeleted} setFreshDeleted={setFreshDeleted}/>
            ))}
        </div>
    )
}

export default CSCardGrid
