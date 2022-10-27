import { useState, useRef, createContext, useContext } from 'react'

const AppContext = createContext();

export const AppProvider = ({children}) => {
  // TODOs
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem('todos')) {
      return JSON.parse(localStorage.getItem('todos'));
    }

    localStorage.setItem('todos', JSON.stringify([]))
    return [];
  })

  const [addTodo, setAddTodo] = useState(false);
  const [editCheck, setEditCheck] = useState(false);
  const [preEditInfo, setPreEditInfo] = useState({});

  const [freshDeleted, setFreshDeleted] = useState(false);

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

  const toCloseArr = [];
  const closeTimeouts = [];
  const closeTodo = (e, todo) => {
    const todosToBeClosed = Array.from(document.querySelectorAll('.todoToBeClosed'));


    toCloseArr.push(todo.orderNumber);
    
    const undoTimerInt = setTimeout(() => {    
      // Add to deleted Todo list
      let deletedTodosList = []
    
      if (localStorage.getItem('deleted-todos')) {
      deletedTodosList = JSON.parse(localStorage.getItem('deleted-todos'))
           
      localStorage.setItem('deleted-todos', JSON.stringify([...deletedTodosList, todos.filter(tempTodo => tempTodo.orderNumber === todo.orderNumber)[0]]))
    } else {
      localStorage.setItem('deleted-todos', JSON.stringify(todos.filter(tempTodo => tempTodo.orderNumber === todo.orderNumber)))
    }

    if (toCloseArr.length > 1) {
      localStorage.setItem('todos', JSON.stringify(todos.filter(tempTodo =>  !toCloseArr.includes(tempTodo.orderNumber))))
    } else {
      localStorage.setItem('todos', JSON.stringify(todos.filter(tempTodo => tempTodo.orderNumber !== todo.orderNumber)));
    }

    setTodos(JSON.parse(localStorage.getItem('todos')));    
  }, 2000);

  closeTimeouts.push(undoTimerInt);

  const selectedTodo = e.target.parentNode.parentNode;
  selectedTodo.classList = 'urgent-undo todoToBeClosed';
  selectedTodo.id = `testDelete-${todo.orderNumber}`;
  selectedTodo.innerHTML = '<button class="undo-btn">Undo</button>';
  
  if (todosToBeClosed.length >= 1) {
    todosToBeClosed[0].innerHTML = ``;
  }

  document.getElementById(`testDelete-${todo.orderNumber}`).addEventListener('click', () => {
    document.getElementById(`testDelete-${todo.orderNumber}`).innerHTML = selectedTodo.innerHTML;
  
    closeTimeouts.forEach((timeout) => clearTimeout(timeout))

    if (toCloseArr.length > 1) {
      localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.orderNumber !== toCloseArr[0])))
    }

    setTodos([]);
    setTodos(JSON.parse(localStorage.getItem('todos')));
  })
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

  const addNewTodo = (orderNumber, todo) => {
    let currentTodos = []

    if (localStorage.getItem('todos')) {
      currentTodos = JSON.parse(localStorage.getItem('todos'))
    } 

    // check for/edit duplicate orderNumbers
    let duplicateCount = 1

    let possibleDuplicate = currentTodos.find(todo => todo.orderNumber === orderNumber)

    if(possibleDuplicate) {
      for (let i=0; i<currentTodos.length; i++) {
        if (currentTodos[i].orderNumber.substring(0, orderNumber.length + 2) === `${orderNumber} -`) {
          duplicateCount++
        }
      }

      orderNumber = `${orderNumber} - ${duplicateCount}`
    }

    currentTodos.push({orderNumber, todo, date: new Date().toString().substring(0,15), urgent: false, waitingForResponse: false})

    localStorage.setItem('todos', JSON.stringify(currentTodos))

    setTodos(currentTodos)
    setAddTodo(!addTodo)
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

  // Bulletin Board
  const [addNewBBoardItem, setAddNewBBoardItem] = useState(false);
  const bbEditCheck = useRef(false);
  const prevBbName = useRef(null);
  const [bboardItemArray, setBboardItemArray] = useState(JSON.parse(localStorage.getItem('bulletinBoard')));
  const [selectedBBoardItemContents, setSelectedBBoardItemContents] = useState('testing');

  const closeCurrentBBItem = () => {
    document.querySelector('.bboard-item-contents-container').classList.add('hidden');
  }

  const deleteBBoardItemFromArray = (itemToBeDeleted) => {
    let tempBBoardItemArray = bboardItemArray.filter((item) => item.name !== itemToBeDeleted)

    localStorage.setItem('bulletinBoard', JSON.stringify(tempBBoardItemArray))

    setBboardItemArray(tempBBoardItemArray)
  }

  return <AppContext.Provider value={{ 
    todos,
    setTodos,
    addTodo,
    setAddTodo,
    addNewTodo,
    editCheck, 
    setEditCheck,
    addNewBBoardItem, 
    setAddNewBBoardItem,
    bbEditCheck,
    prevBbName,
    bboardItemArray,
    setBboardItemArray,
    selectedBBoardItemContents,
    setSelectedBBoardItemContents,
    closeCurrentBBItem,
    preEditInfo,
    setPreEditInfo,
    initiateEdit,
    submitEdit,
    setTodoUrgent,
    setTodoWaiting,
    closeTodo,
    freshDeleted,
    setFreshDeleted,
    restoreTodo,
    deleteBBoardItemFromArray
  }}>
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}


