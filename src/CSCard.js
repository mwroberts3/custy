const CSCard = ({todo, setTodoUrgent, setTodoWaiting, closeTodo, initiateEdit, freshDeleted}) => {

    // use freshDeleted state to determine when to show the undo button after fresh delete

    return (        
        <div>
        { !freshDeleted ? <div className={todo.urgent ?"customer-service-card urgent" : todo.waitingForResponse ? "customer-service-card waiting" : "customer-service-card"}>
            <nav className="csc-options"><span onClick={() => setTodoUrgent(todo.orderNumber)}>URGENT</span><span onClick={() => setTodoWaiting(todo.orderNumber)}>WAITING</span><span onClick={(e) => closeTodo(e, todo.orderNumber)}>CLOSE</span></nav>
            <hr style={{width:'100%'}}></hr>
            <h3 className="customer-service-card-order-number">{todo.orderNumber}</h3>
            <h5 className="customer-service-card-order-date">{todo.date}</h5>
            <p onClick={() => {
                initiateEdit(todo.orderNumber, todo.todo)
            }}>{todo.todo}</p>
            </div>
          :
          <div>Undo</div>
        }
        </div>
    )
}

export default CSCard
