import { useEffect, useState } from "react"
import {TodoProvider} from "../contexts"
import { useAuth0} from "@auth0/auth0-react";
import Todoform from "./Todoform"
import Todoitem from "./Todoitem"
import LogoutButton from "./logout.jsx";
import {useNavigate} from "react-router-dom";


function Home(){
    const [todos,setTodos]= useState([])
    const { user, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

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

    //to get all the prev todos after reloading
    useEffect( ()=>{
        const todos= JSON.parse(localStorage.getItem("todos"))
        if(todos && todos.length > 0)setTodos(todos)

    }, [])

    //reload after adding every new todo in the array
    useEffect( ()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    if(isLoading){
        return <div>Loading...</div>
    }

    if(!isAuthenticated){
        navigate('/login')
    }

    console.log(user)


    return(isAuthenticated && (
        <TodoProvider value={{todos,addTodo,editTodo,deleteTodo,toggleComplete }}>
            <LogoutButton/>

            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <div>Welcome {user.name}</div>
                        <Todoform />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        { todos.map( (todo)=> (
                            <div key={todo.id} className="w-full">
                                <Todoitem todo={todo} />
                            </div>
                        ) ) }

                    </div>
                </div>
            </div>

        </TodoProvider>
    ))
}

export default Home
