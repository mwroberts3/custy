const CSCard = ({todo, setTodoUrgent, setTodoWaiting, closeTodo, initiateEdit}) => {

    return (        
        <div>
            <div className={todo.urgent ?"customer-service-card urgent" : todo.waitingForResponse ? "customer-service-card waiting" : "customer-service-card"}>
            <nav className="csc-options"><span onClick={() => setTodoUrgent(todo.orderNumber)}>URGENT</span><span onClick={() => setTodoWaiting(todo.orderNumber)}>WAITING</span><span onClick={(e) => closeTodo(e, todo.orderNumber)}>CLOSE</span></nav>
            <hr style={{width:'100%'}}></hr>
            <h3 className="customer-service-card-order-number">{todo.orderNumber}</h3>
            <h5 className="customer-service-card-order-date">{todo.date}</h5>
            <p onClick={() => {
                initiateEdit(todo.orderNumber, todo.todo)
            }}>{todo.todo}</p>
            </div>
        </div>
    )
}

export default CSCard
