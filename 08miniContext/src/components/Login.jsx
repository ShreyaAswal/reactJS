import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username,setUsername]=useState("")
    const [password,setPassword]= useState("")

    const {setUser}=useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({username, password})
        //console.log(user.username)
    }
    return (
        <>
        <div>
        <h2>Login to the Page</h2>
        <input type="text" placeholder="username" value={username} onChange={ (e)=>setUsername(e.target.value) }/>
        <input type="password" placeholder="password" value={password} onChange={ (e)=>setPassword(e.target.value) }/>
        <button onClick={handleSubmit} >Login</button>
        </div>
        </>
    )
}
export default Login