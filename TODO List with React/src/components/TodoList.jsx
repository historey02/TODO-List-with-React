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
            task: input.trim()
        }
        addTodo(newTodo);
        setInput("");
    }


    return(
        <div className="todo-list">
            {todos.map((todo) =>(
                (<TodoCard key={todo.id} task={todo.task}/>)
            ))}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a TODO"/>
            <button type="button" onClick={(onAddTodoClick)}>Enter</button>
        </div>
    );
}

export default TodoList;