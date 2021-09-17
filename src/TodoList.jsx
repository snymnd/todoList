import React from 'react'
import YetDone from './YetDone'
import Done from './Done'
import {v4 as uuidv4} from 'uuid'

export default function TodoList({todos, toggleTodo, deleteTodo, check}) {
    
    return ( 
        <section className="card book_shelf" key={uuidv4()}>
            <h2>{check} list</h2>

            <div id="incompleteBookshelfList" key={uuidv4()} className="card book_list"> 
                {check === "Undone"
                    ?<YetDone key={uuidv4()} todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    :<Done key={uuidv4()} todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                }   
            </div>
         </section>
    )
}
