import './App.css';
import { useState } from 'react'
import logo from './custy-logo.jpg'
import CSCardGrid from './CSCardGrid'
import AddTodo from './AddTodo'
import AddBBoardItem from './bulletinboard/AddBBoardItem';
import AddTodoForm from './AddTodoForm'
import EditTodoForm from './EditTodoForm'
import GithubLink from './navbar/GithubLink'
import RestoreTodo from './navbar/RestoreTodo'
import NightMode from './navbar/NightMode'
import BulletinBoard from './bulletinboard/BulletinBoard';
import BBoardItemContents from './bulletinboard/BBoardItemContents';
import AddBBItemForm from './bulletinboard/AddBBItemForm';

function App() {
  // bulletin board check
  if (!localStorage.getItem('bulletinBoard')) {
    localStorage.setItem('bulletinBoard', JSON.stringify([]))
  }

  const [lightTheme, setLightTheme] = useState(true)

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [addTodo, setAddTodo] = useState(false)
  const [freshDeleted, setFreshDeleted] = useState(false)
  const [addNewBBoardItem, setAddNewBBoardItem] = useState(false)
  const [selectedBBoardItemContents, setSelectedBBoardItemContents] = useState('testing')
  const [editCheck, setEditCheck] = useState(false)
  const [preEditInfo, setPreEditInfo] = useState({})
  const [bboardItemArray, setBboardItemArray] = useState(JSON.parse(localStorage.getItem('bulletinBoard')))

  window.onfocus = () => {
    setLightTheme(JSON.parse(localStorage.getItem('light-theme')))

    setTodos(JSON.parse(localStorage.getItem('todos')))

    setBboardItemArray(JSON.parse(localStorage.getItem('bulletinBoard')))
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

let tempTodos = todos
const closeTodo = (e, todo) => {
  const undoTimerInt = setInterval(() => {
    tempTodos = tempTodos.filter(tempTodo => tempTodo.orderNumber !== todo.orderNumber)
    
    localStorage.setItem('todos', JSON.stringify(tempTodos))
    
    // storing deleting todo in hidden localstorage array
    let deletedTodo = todos.filter(tempTodo => tempTodo.orderNumber === todo.orderNumber)
    
    let deletedTodosList = []
    
    if (localStorage.getItem('deleted-todos')) {
      deletedTodosList = JSON.parse(localStorage.getItem('deleted-todos'))
      
      deletedTodosList.push(deletedTodo[0])
      
      localStorage.setItem('deleted-todos', JSON.stringify(deletedTodosList))
    } else {
      localStorage.setItem('deleted-todos', JSON.stringify(deletedTodo))
    }

    document.getElementById(`testDelete-${todo.orderNumber}`).classList.remove('todoToBeClosed')
    
    console.log(document.querySelectorAll('.todoToBeClosed').length)
    
    clearInterval(undoTimerInt)
    setTodos(tempTodos)
  }, 2000) 

  let selectedTodo = e.target.parentNode.parentNode.parentNode.innerHTML
  
  e.target.parentNode.parentNode.parentNode.innerHTML = `
  <div id="testDelete-${todo.orderNumber}" class="urgent-undo todoToBeClosed">
  <button class="undo-btn">Undo</button>
  </div>
  `

  document.getElementById(`testDelete-${todo.orderNumber}`).addEventListener('click', () => {
    console.log('urgent undo test')

    document.getElementById(`testDelete-${todo.orderNumber}`).classList.remove('urgent-undo')

    document.getElementById(`testDelete-${todo.orderNumber}`).classList.remove('todoToBeClosed')

    document.getElementById(`testDelete-${todo.orderNumber}`).innerHTML = selectedTodo
    clearInterval(undoTimerInt)

    console.log(document.querySelectorAll('.todoToBeClosed').length)
    if (document.querySelectorAll('.todoToBeClosed').length < 1) {
      setTodos([]) 
      setTodos(tempTodos)
    }
  })
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
        <NightMode lightTheme={lightTheme} setLightTheme={setLightTheme}/><RestoreTodo restoreTodo={restoreTodo}/>
        </div>
        <div id="icons-container-2"><GithubLink /></div>
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
        setSelectedBBoardItemContents={setSelectedBBoardItemContents} setAddNewBBoardItem={setAddNewBBoardItem}/>
        <CSCardGrid initiateEdit={initiateEdit} setTodos={setTodos} todos={todos} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo} freshDeleted={freshDeleted} setFreshDeleted={setFreshDeleted}/>
        {addTodo && <AddTodoForm addNewTodo={ addNewTodo }/>}
        {editCheck && <EditTodoForm submitEdit={ submitEdit } orderNumber={preEditInfo.orderNumber} todo={preEditInfo.todo}/>}
        {addNewBBoardItem && <AddBBItemForm bboardItemArray={bboardItemArray}setAddNewBBoardItem={setAddNewBBoardItem} />}
        <BBoardItemContents contents={selectedBBoardItemContents} bboardItemArray={bboardItemArray} setBboardItemArray={setBboardItemArray} setAddNewBBoardItem={setAddNewBBoardItem}/>
      </div>
  );
}

export default App;
