import '../css/TodoCard.css'
import {useTodoContext} from '../contexts/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'


function TodoCard({todo, className}){
    const {completed, addTodo, removeTodo, addCompleted, removeCompleted} = useTodoContext();

    function onDeleteClick(e){
        e.preventDefault();
        removeTodo(todo.id);
        removeCompleted(todo.id);
    }

    function handleStatusClick(e){
        e.preventDefault();
        //Checks if task is already in completed. If it is, that todo is added to Todos and removed from completed
        if(completed.some(obj => obj.id === todo.id )){
            removeCompleted(todo.id);
            addTodo(todo);
            console.log("Removed from completed, added to todos")
        }
        //if the todo is not in completed, then adds it to completed and removes it from todos
        else{
            addCompleted(todo);
            removeTodo(todo.id);
            console.log("Romoved from todos, added to completed")
        }
    }

    return(
        <div className={`todo-card ${className}`}>
            <button className="status-button" onClick={(handleStatusClick)}>
                <FontAwesomeIcon className="check-icon" icon={faCheck}/>
            </button>
            <h2 className="todo-name">{todo.todo}</h2>
            <button className="delete-button" onClick={(onDeleteClick)}>
                <FontAwesomeIcon className="trash-icon" icon={faTrashCan}/>
            </button>
        </div>
    );
}

export default TodoCard;