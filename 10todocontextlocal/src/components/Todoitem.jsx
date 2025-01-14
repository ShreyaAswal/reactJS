import { useState } from "react";
import { useTodo } from "../contexts";

function Todoitem({ todo }) {

    const {editTodo,deleteTodo,toggleComplete} = useTodo()

    const [isTodoEditable,setIsTodoEditable] = useState(false) //it is for making the input box as readonly (when editing is going on)
    const [todoMsg,setTodoMsg] = useState(todo.title)

    const changeToggle = ()=>{
        toggleComplete(todo.id)
        
    }

    const edit = ()=>{
        editTodo(todo.id,{title: todoMsg, ...todo})
        setIsTodoEditable(false)
    }
    
    

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={changeToggle}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) { //saving the new title
                        edit();
                    } 
                    else setIsTodoEditable((prev) => !prev); //making the title editable/Non-editable
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default Todoitem;
