import './App.css';
import { useState } from 'react'
import logo from './custy-logo.jpg'
import CSCardGrid from './CSCardGrid'
import AddTodo from './AddTodo'
import AddTodoForm from './AddTodoForm'
import EditTodoForm from './EditTodoForm'
import GithubLink from './GithubLink'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [addTodo, setAddTodo] = useState(false)
  const [editCheck, setEditCheck] = useState(false)
  const [preEditInfo, setPreEditInfo] = useState({})

  const showAddTodoForm = () =>{
    setAddTodo(!addTodo)
  }
  
  const showEditTodoForm = () =>{
    setEditCheck(!editCheck)
  }

  const addNewTodo = (orderNumber, todo) => {
    let currentTodos = []

    if (localStorage.getItem('todos')) {
      currentTodos = JSON.parse(localStorage.getItem('todos'))
    } 

    currentTodos.push({orderNumber, todo, date: new Date().toString().substring(0,15), urgent: false, waitingForResponse: false})

    localStorage.setItem('todos', JSON.stringify(currentTodos))

    setTodos(currentTodos)
    setAddTodo(!addTodo)
}

  const initiateEdit = (orderNumber, todo) => {
    let tempEdit = {
      orderNumber,
      todo
    }
    setPreEditInfo(tempEdit)
    setEditCheck(!editCheck)
    setAddTodo(!addTodo)
  }

  const submitEdit = (editedDescription) => {
    let tempTodos = JSON.parse(localStorage.getItem('todos'))

    tempTodos.forEach((todo) => {
      if (todo.orderNumber === preEditInfo.orderNumber) {
        todo.todo = editedDescription
      }
    })

    localStorage.setItem('todos', JSON.stringify(tempTodos))

    setTodos(tempTodos)
    setEditCheck(!editCheck)
  }

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
      <div className="App">
        <GithubLink />
        <header id="app-header">
        <img id="custy-logo" src={logo} alt="Logo" />
        </header>
        <div style={{
          width:'100%', display: 'flex', justifyContent: 'center'
          }}>
          <AddTodo showAddTodoForm={showAddTodoForm} showEditTodoForm={showEditTodoForm} addTodo={addTodo} editCheck={editCheck}/>
        </div>
        <CSCardGrid initiateEdit={initiateEdit} todos={todos} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo}/>
        {addTodo && <AddTodoForm addNewTodo={ addNewTodo }/>}
        {editCheck && <EditTodoForm submitEdit={ submitEdit } orderNumber={preEditInfo.orderNumber} todo={preEditInfo.todo}/>}
      </div>
  );
}

export default App;
