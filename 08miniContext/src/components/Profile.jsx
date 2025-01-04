import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile(){
    const {user}= useContext(UserContext)
    if(!user) return(
        <h1>User not present!!!</h1>
    )
    else return(
        <h1>Hello!! {user.username} , your password is {user.password}</h1>
       
    )
}
export default Profile