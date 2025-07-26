import {createContext, useState, useContext, useEffect} from 'react'

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider =({children}) => {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() =>{
        const storedTodos = localStorage.getItem('todos');
        if(storedTodos){
            setTodos(JSON.parse(storedTodos));
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    function addTodo(todo){
        setTodos(prev => [...prev, todo]);
    }

    function removeTodo(todoId){
        setTodos(prev => prev.filter(todo => todo.id !== todoId));
    }

    function addCompleted(todo){
        setCompleted(prev => [...prev, todo]);
    }

    function removeCompleted(todoId){
        setCompleted(prev => prev.filter(todo => todo.id !== todoId));
    }

    const value = {
        todos,
        completed,
        addTodo,
        removeTodo,
        addCompleted,
        removeCompleted
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}