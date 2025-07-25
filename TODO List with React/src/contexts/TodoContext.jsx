import {createContext, useState, useContext, useEffect} from 'react'

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider =({children}) => {
    const [todos, setTodos] = useState([]);

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

    const value = {
        todos,
        addTodo,
        removeTodo
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}