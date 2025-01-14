import { createContext,useContext } from "react";

export const Todocontext= createContext({
    todos:[
        {
            id:1,
            title:"1st to do",
            completed:false
        }
    ],
    addTodo: (title)=>{},
    editTodo: (id,todos)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const TodoProvider= Todocontext.Provider()

export const useTodo = ()=>{
    return useContext(Todocontext)
}