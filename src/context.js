import { useState, createContext, useContext } from 'react'

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem('todos')) {
      return JSON.parse(localStorage.getItem('todos'));
    }

    localStorage.setItem('todos', JSON.stringify([]))
    return [];
  })


  return <AppContext.Provider value={{ 
    todos,
    setTodos
  }}>
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}


