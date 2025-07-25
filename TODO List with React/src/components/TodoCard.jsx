import '../css/TodoCard.css'
import {useTodoContext} from '../contexts/TodoContext'

function TodoCard({task}){
    const {removeTodo} = useTodoContext();


    return(
        <div className="todo-card">
            <h2 className="todo-name">{task}</h2>
            <button className="delete-button">X</button>
        </div>
    );
}

export default TodoCard;