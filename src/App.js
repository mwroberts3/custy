import './App.css';
import { useState } from 'react'
import logo from './custy-logo.png'
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
import { useGlobalContext } from './context';

function App() {
  const { setTodos, addTodo, editCheck, addNewBBoardItem, setBboardItemArray } = useGlobalContext();

  // bulletin board check
  if (!localStorage.getItem('bulletinBoard')) {
    localStorage.setItem('bulletinBoard', JSON.stringify([]))
  }

  const [lightTheme, setLightTheme] = useState(() => {
    if (localStorage.getItem('light-theme')) {
      return JSON.parse(localStorage.getItem('light-theme'))
    } else {
      localStorage.setItem('light-theme', true);
      
      return JSON.parse(localStorage.getItem('light-theme'))
    }
  })

  // apply light/dark theme upon focus
  window.onfocus = () => {
    setLightTheme(JSON.parse(localStorage.getItem('light-theme')))

    setTodos(JSON.parse(localStorage.getItem('todos')))

    setBboardItemArray(JSON.parse(localStorage.getItem('bulletinBoard')))
  }

  return (
      <div className="App">
        <div id="icons-container">
          <NightMode 
            lightTheme={lightTheme} 
            setLightTheme={setLightTheme} />
          <RestoreTodo />
        </div>
        <div id="icons-container-2">
          <GithubLink />
        </div>
        <header id="app-header">
          <img id="custy-logo" src={logo} alt="Custy logo" />
        </header>
        <div id='controller-container'>
          <AddTodo />
          <AddBBoardItem />
        </div>
        <BulletinBoard />
        <CSCardGrid />
        {addTodo && <AddTodoForm />}
        {editCheck && <EditTodoForm />}
        {addNewBBoardItem && <AddBBItemForm />}
        <BBoardItemContents />
      </div>
  );
}

export default App;
