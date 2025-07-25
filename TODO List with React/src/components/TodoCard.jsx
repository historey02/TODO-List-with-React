import '../css/TodoCard.css'

function TodoCard({task}){


    return(
        <div className="todo-card">
            <h2 className="todo-name">{task}</h2>
            <hr />
            <textarea name="todo-textarea" id="todo-textarea"></textarea>
        </div>
    );
}

export default TodoCard;