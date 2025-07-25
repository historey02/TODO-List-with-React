import {useState} from 'react'
import TodoCard from './TodoCard'
import "../css/TodoList.css"

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    function addTodo(){
       if(input.trim() !== ""){
            setTodos(prev =>[...prev, input]);
            setInput("");
       }
    }

    return(
        <div className="todo-list">
            {todos.map((todo) =>(
                (<TodoCard key={todo} task={todo}/>)
            ))}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a TODO"/>
            <button type="button" onClick={(addTodo)}>Enter</button>
        </div>
    );
}

export default TodoList;