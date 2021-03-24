import './App.css';
import CSCardGrid from './CSCardGrid'
import { useState } from 'react'
import AddTodo from './AddTodo'
import AddTodoForm from './AddTodoForm'
import EditTodoForm from './EditTodoForm'

function App() {
  const [addTodo, setAddTodo] = useState(false)
  const [editCheck, setEditCheck] = useState(false)
  const [preEditInfo, setPreEditInfo] = useState({})

  const showAddTodoForm = () =>{
    setAddTodo(!addTodo)
  }

  const addNewTodo = (orderNumber, todo) => {
    let currentTodos = []

    if (localStorage.getItem('todos')) {
      currentTodos = JSON.parse(localStorage.getItem('todos'))
    } 

    currentTodos.push({orderNumber, todo, date: new Date().toString().substring(0,15), urgent: false, waitingForResponse: false})

    localStorage.setItem('todos', JSON.stringify(currentTodos))

    console.log(orderNumber, todo)
}

  const initiateEdit = (orderNumber, todo) => {
    let tempEdit = {
      orderNumber,
      todo
    }
    console.log(orderNumber, todo)
    setPreEditInfo(tempEdit)
    setEditCheck(true)
  }

  const submitEdit = (editedDescription) => {
    console.log(preEditInfo)

    let todos = JSON.parse(localStorage.getItem('todos'))

    todos.forEach((todo) => {
      if (todo.orderNumber === preEditInfo.orderNumber) {
        todo.todo = editedDescription
      }
    })

    localStorage.setItem('todos', JSON.stringify(todos))
  }

  return (
    <div className="App">
      <h1>Custy</h1>
      <div style={{
        width:'100%', display: 'flex', justifyContent: 'center'
        }}>
        <AddTodo showAddTodoForm={showAddTodoForm} addTodo={addTodo}/>
      </div>
      <CSCardGrid initiateEdit={initiateEdit}/>
      {addTodo && <AddTodoForm addNewTodo={ addNewTodo }/>}
      {editCheck && <EditTodoForm submitEdit={ submitEdit } orderNumber={preEditInfo.orderNumber} todo={preEditInfo.todo}/>}
    </div>
  );
}

export default App;
