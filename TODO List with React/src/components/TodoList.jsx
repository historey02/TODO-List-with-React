import {useState} from 'react'
import TodoCard from './TodoCard'
import "../css/TodoList.css"
import {useTodoContext} from '../contexts/TodoContext'

function TodoList(){
    const {todos, addTodo} = useTodoContext();
    const [input, setInput] = useState("");

     function onAddTodoClick(e){
        e.preventDefault();
        if(input.trim() === "") return;
        
        const newTodo ={
            id: Date.now(),
            todo: input.trim()
        }
        addTodo(newTodo);
        setInput("");
    }


    return(
        <div className="todo-list">
            <div className="nav-bar">
                <button className="all-button">All</button>
                <button className="todo-button">Todo</button>
                <button className="completed-button">Completed</button>
            </div>
            {todos.map((todo) =>(
                (<TodoCard key={todo.id} todo={todo}/>)
            ))}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a TODO"/>
            <button className="add-button" type="button" onClick={(onAddTodoClick)}>Enter</button>
        </div>
    );
}

export default TodoList;