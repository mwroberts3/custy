import './App.css';
import { useState } from 'react'
import logo from './custy-logo.jpg'
import CSCardGrid from './CSCardGrid'
import AddTodo from './AddTodo'
import AddBBoardItem from './AddBBoardItem';
import AddTodoForm from './AddTodoForm'
import EditTodoForm from './EditTodoForm'
import GithubLink from './GithubLink'
import BulletinBoard from './BulletinBoard';
import BBoardItemContents from './BBoardItemContents';
import AddBBItemForm from './AddBBItemForm';

function App() {
  // bulletin board test data
  // let bbTestData = [{name: 'applying discounts in NS',desc: 'applying discounts in NS description'}, {name: 'refunds',desc: 'refunds description'},
  // {name: 'manufacturer contact', desc:'manufacturer contact desc'}]
  // localStorage.setItem('bulletinBoard',JSON.stringify(bbTestData))

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [addTodo, setAddTodo] = useState(false)
  const [addNewBBoardItem, setAddNewBBoardItem] = useState(false)
  const [selectedBBoardItemContents, setSelectedBBoardItemContents] = useState('testing')
  const [editCheck, setEditCheck] = useState(false)
  const [preEditInfo, setPreEditInfo] = useState({})
  const [bboardItemArray, setBboardItemArray] = useState(JSON.parse(localStorage.getItem('bulletinBoard')))

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
          <AddBBoardItem setAddNewBBoardItem={setAddNewBBoardItem} addNewBBoardItem={addNewBBoardItem}/>
        </div>
        <BulletinBoard bboardItemArray={bboardItemArray} setBboardItemArray={setBboardItemArray}
        setSelectedBBoardItemContents={setSelectedBBoardItemContents}/>
        <CSCardGrid initiateEdit={initiateEdit} todos={todos} setTodoUrgent={setTodoUrgent} setTodoWaiting={setTodoWaiting} closeTodo={closeTodo}/>
        {addTodo && <AddTodoForm addNewTodo={ addNewTodo }/>}
        {editCheck && <EditTodoForm submitEdit={ submitEdit } orderNumber={preEditInfo.orderNumber} todo={preEditInfo.todo}/>}
        {addNewBBoardItem && <AddBBItemForm bboardItemArray={bboardItemArray}  setAddNewBBoardItem={setAddNewBBoardItem}/>}
        <BBoardItemContents contents={selectedBBoardItemContents}/>
      </div>
  );
}

export default App;
