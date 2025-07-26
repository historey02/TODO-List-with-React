import '../css/TodoCard.css'
import {useTodoContext} from '../contexts/TodoContext'

function TodoCard({todo, key}){
    const {todos, removeTodo} = useTodoContext();

    function onDeleteClick(e){
        e.preventDefault();
        removeTodo(todo.id);
    }

    return(
        <div className="todo-card">
            <button className="status-button">0</button>
            <h2 className="todo-name">{todo.todo}</h2>
            <button className="delete-button" onClick={(onDeleteClick)}>X</button>
        </div>
    );
}

export default TodoCard;