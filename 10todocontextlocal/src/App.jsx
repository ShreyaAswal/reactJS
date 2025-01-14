import { useState } from "react"
import {TodoProvider} from "./contexts"

function App(){

  const [todos,setTodos]= useState([])

  function addTodo(todo){
    setTodos( (prev)=> [...prev, { id: Date.now(), ...todo}] )
  }


  function editTodo(id , updatedtodo){
    setTodos( 
      (prev) => prev.map( (todo)=>{
        if(todo.id===id)return updatedtodo
        else return todo
      } )
    )
  }

  function deleteTodo(id){
    setTodos(
      (prev) => prev.filter( (todo)=> (todo.id !== id) )
    )
  }

  function toggleComplete(id){
    setTodos(
      (prev)=> prev.map( (todo)=>{

        if(todo.id===id){
          return {...todo, completed: !todo.completed}
        }
        else return todo
      } )
    )
  }


  return(
    <TodoProvider value={{todos,addTodo,editTodo,deleteTodo,toggleComplete }}>

      <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here */} 
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                </div>
            </div>
      </div>

    </TodoProvider>
  )
}

