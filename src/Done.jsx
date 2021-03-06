import React from 'react'
import Delete from './Delete'
import {v4 as uuidv4} from 'uuid'

export default function YetDone({todos, toggleTodo, deleteTodo}) {

    function handleTodoClick(todo){
        toggleTodo(todo.id)
    }    
    
    return (
        <div>
            {todos.filter(todo => todo.complete === true).map(yetdone =>(
                <div className="todo_item card" key={uuidv4()}>
                    <h3>{yetdone.name}</h3>
                    <p>Deadline: {yetdone.deadline}</p>
                    <div className="action">
                        <button id="addSubmit" type="submit" onClick={handleTodoClick.bind(this, yetdone)} className="green">Mark as UnDone</button>
                        <Delete key={yetdone.id} deleteTodo={deleteTodo} todo = {yetdone} /> 
                    </div>
                </div>
            ))}
            <div className="leftTodos"> {todos.filter(todo => todo.complete===true).length} finished todo</div>   
        </div>
    )
}
