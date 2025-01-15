import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import LoginButton from "./components/login.jsx";


function App(){
  return (
      <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/login"} element={<LoginButton/>}></Route>
      </Routes>
  )

}

export default App
