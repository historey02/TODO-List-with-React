import { useState } from 'react'
import TodoCard from './components/TodoCard'
import TodoList from './components/TodoList'
import './css/App.css'

function App() {
  
  return(
    <div className="app-container">
      <TodoList />
    </div>
  );
}

export default App
