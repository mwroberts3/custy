import './App.css';
import { useState } from 'react'
import logo from './custy-logo.jpg'
import CSCardGrid from './CSCardGrid'
import AddTodo from './AddTodo'
import AddBBoardItem from './bulletinboard/AddBBoardItem';
import AddTodoForm from './AddTodoForm'
import EditTodoForm from './EditTodoForm'
import GithubLink from './GithubLink'
import RestoreTodo from './RestoreTodo'
import BulletinBoard from './bulletinboard/BulletinBoard';
import BBoardItemContents from './bulletinboard/BBoardItemContents';
import AddBBItemForm from './bulletinboard/AddBBItemForm';

function App() {
  // bulletin board check
  if (!localStorage.getItem('bulletinBoard')) {
    localStorage.setItem('bulletinBoard', JSON.stringify([]))
  }

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [addTodo, setAddTodo] = useState(false)
  const [freshDeleted, setFreshDeleted] = useState(null)
  const [addNewBBoardItem, setAddNewBBoardItem] = useState(false)
  const [selectedBBoardItemContents, setSelectedBBoardItemContents] = useState('testing')
  const [editCheck, setEditCheck] = useState(false)
  const [preEditInfo, setPreEditInfo] = useState({})
  const [bboardItemArray, setBboardItemArray] = useState(JSON.parse(localStorage.getItem('bulletinBoard')))
  
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
    if (addTodo) {
      setAddTodo(!addTodo)
    }
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

const closeTodo = (e, orderNumber) => {
  setFreshDeleted(orderNumber)

  // set timer for quick undo
    setTimeout(() => {
      if (!setFreshDeleted) {
        let editedTodos
        
        editedTodos = todos.filter(todo => todo.orderNumber !== orderNumber)
        
        localStorage.setItem('todos', JSON.stringify(editedTodos))
        setTodos(JSON.parse(localStorage.getItem('todos')))
    
        // storing deleting todo in hidden localstorage array
        let deletedTodo = todos.filter(todo => todo.orderNumber === orderNumber)
    
        let deletedTodosList = []
    
        if (localStorage.getItem('deleted-todos')) {
          deletedTodosList = JSON.parse(localStorage.getItem('deleted-todos'))
    
          deletedTodosList.push(deletedTodo[0])
    
          localStorage.setItem('deleted-todos', JSON.stringify(deletedTodosList))
        } else {
          localStorage.setItem('deleted-todos', JSON.stringify(deletedTodo))
        }
    
        setFreshDeleted(null) 
      }
    }, 2000)
}

const restoreTodo = () => {
  let currentTodos = []

  if (localStorage.getItem('todos')) {
    currentTodos = JSON.parse(localStorage.getItem('todos'))

    document.querySelector('#restore-last-todo').classList.add('restore-enabled')
  } 

  if (localStorage.getItem('deleted-todos')) {
    if (JSON.parse(localStorage.getItem('deleted-todos')).length > 0) {
      let restoredTodoList
  
      restoredTodoList = JSON.parse(localStorage.getItem('deleted-todos'))
  
      restoredTodoList = restoredTodoList.reverse()
  
      let restoredTodo = restoredTodoList[0]
  
      restoredTodoList = restoredTodoList.filter(todo => todo !== restoredTodo)
      localStorage.setItem('deleted-todos', JSON.stringify(restoredTodoList))
  
      currentTodos.push(restoredTodo)
  
      localStorage.setItem('todos', JSON.stringify(currentTodos))
  
      setTodos(currentTodos)
    } else {
      alert('all todos restored')
    }
  }
}

  return (
      <div className="App">
        <div id="icons-container">
          <GithubLink /><RestoreTodo restoreTodo={restoreTodo}/>
        </div>
        <header id="app-header">
        <img id="custy-logo" src={logo} alt="Logo" />
        </header>
        <div style={{
          width:'100%', display: 'flex', justifyContent: 'center'
          }}>
          <AddTodo addTodo={addTodo} editCheck={editCheck} addNewBBoardItem={addNewBBoardItem} setAddTodo={setAddTodo} setEditCheck={setEditCheck} />
          <AddBBoardItem setAddNewBBoardItem={setAddNewBBoardItem} addNewBBoardItem={addNewBBoardItem} addTodo={addTodo} editCheck={editCheck}/>
        </div>
        <BulletinBoard bboardItemArray={bboardItemArray} setBboardItemArray={setBboardItemArray}
        setSelectedBBoardItemContents={setSelectedBBoardItemContents}/>
        <CSCardGrid initiateEdit={initiateEdit} todos={todos} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo} freshDeleted={freshDeleted} setFreshDeleted={setFreshDeleted}/>
        {addTodo && <AddTodoForm addNewTodo={ addNewTodo }/>}
        {editCheck && <EditTodoForm submitEdit={ submitEdit } orderNumber={preEditInfo.orderNumber} todo={preEditInfo.todo}/>}
        {addNewBBoardItem && <AddBBItemForm bboardItemArray={bboardItemArray}  setAddNewBBoardItem={setAddNewBBoardItem} />}
        <BBoardItemContents contents={selectedBBoardItemContents} bboardItemArray={bboardItemArray} setBboardItemArray={setBboardItemArray}/>
      </div>
  );
}

export default App;
