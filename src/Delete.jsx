import React from 'react'

export default function Delete({todo, deleteTodo}) {
    function handleDeleteClick(todo){
        deleteTodo(todo.id)
    }

    return (
        <button id="addSubmit" type="submit" onClick={handleDeleteClick.bind(this, todo)} className="red">Delete</button>     
    )
}
