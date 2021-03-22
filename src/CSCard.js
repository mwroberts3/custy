const CSCard = ({todo, setTodoUrgent, setTodoWaiting, closeTodo}) => {

    return (
        <div className={todo.urgent ?"customer-service-card urgent" : todo.waitingForResponse ? "customer-service-card waiting" : "customer-service-card"}>
            <nav className="csc-options"><span onClick={() => setTodoUrgent(todo.orderNumber)}>URGENT</span><span>WAITING</span><span>CLOSE</span></nav>
            <hr style={{width:'100%'}}></hr>
            <h3>{todo.orderNumber}</h3>
            <h5>{todo.date}</h5>
            <p>{todo.todo}</p>
        </div>
    )
}

export default CSCard
