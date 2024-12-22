import { useState } from "react"

function App() {
  const [color,setColor]=useState('pink')

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4 gap-3">
          
          <div className="flex, flex-wrap justify-center shadow-lg bg-white rounded-3xl px-3 py-2" style={{gap:"12px"}} >

            <button className="outline-none px-4 rounded-full mx-4 text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>
              red</button>
            <button className="outline-none px-4 rounded-full mx-4 text-white" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>
              brown</button>
            <button className="outline-none px-4 rounded-full mx-4 text-white" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>
              blue</button>
            <button className="outline-none px-4 rounded-full mx-4 text-white" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>
              green</button>
            <button className="outline-none px-4 rounded-full mx-4 text-white" style={{backgroundColor:"grey"}} onClick={()=>setColor("grey")}>
              grey</button>
            <button className="outline-none px-4 rounded-full mx-4 text-white" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>
              purple</button>

          </div>
        </div>


      </div>
    </>
  )
}

export default App
