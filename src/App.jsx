import React, {useState, useRef} from 'react';
import {v4 as uuidv4} from 'uuid'
import './index.css'
import Header from './Header'
import TodoList from './TodoList';
import Search from './Search';
// import InputSection from './InputSection';



function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const todoDeadlineRef = useRef()
 

    function toggleTodo(id){
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)
      //update value dari todos yang berubah status completenya
    }  

    function handleAddTodo(e){
      e.preventDefault();
      const name = todoNameRef.current.value 
      const deadline = todoDeadlineRef.current.value
      setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), name: name, deadline: deadline, complete: false}]
      })
      todoNameRef.current.value = null
      todoDeadlineRef.current.value = null;
    }

    function handleOnchangeSearch(event) {
      const key = event.toUpperCase()
      console.log("the key " + key)

      const todoItem = document.getElementsByClassName("todo_item");
     
     for(let i=0 ; i<todoItem.length ; i++){
        let book = todoItem[i].getElementsByTagName("h3")[0];
        let inText = book.textContent || book.innerText;
        
        if (inText.toUpperCase().indexOf(key)>-1){
            todoItem[i].style.display =null;
        } else{
            todoItem[i].style.display = "none";
        }
     }
      //update value dari todos yang berubah status completenya
    }

    function deleteTodo(id) {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
      //update value dari todos yang berubah status completenya
    }
    
  return(
    <>
    <Header />
     <main>
      <section className="input_section card">
          <h2>Insert Todo</h2>
          <form id="inputBook">

            <div  className="input card">
              <label htmlFor="todoName">Todo Title</label>
              <input id="todoName" ref={todoNameRef} type="text" name="name" required/>
            </div>

            <div className="input card">
              <label htmlFor="todoDeadline">Todo Deadline</label>
              <input id="todoDeadline" ref={todoDeadlineRef} type="date" name="deadline"/>
            </div>

            <button type="submit" onClick={handleAddTodo} className="btn add">Add todo</button>
            {/* gk bisa pake onSubmit */}
          </form>
      </section>

      <Search todos={todos} handleOnchangeSearch={handleOnchangeSearch}/>

      <TodoList key={uuidv4()} todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} check="Undone"/>
      <TodoList key={uuidv4()} todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} check= "done"/>
    </main>
    
    </>
  )
}
export default App;
