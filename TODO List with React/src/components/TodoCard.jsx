import '../css/TodoCard.css'
import {useTodoContext} from '../contexts/TodoContext'

function TodoCard({todo}){
    const {completed, addTodo, removeTodo, addCompleted, removeCompleted} = useTodoContext();

    function onDeleteClick(e){
        e.preventDefault();
        removeTodo(todo.id);
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
        <div className="todo-card">
            <button className="status-button" onClick={(handleStatusClick)}>0</button>
            <h2 className="todo-name">{todo.todo}</h2>
            <button className="delete-button" onClick={(onDeleteClick)}>X</button>
        </div>
    );
}

export default TodoCard;