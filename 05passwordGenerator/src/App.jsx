import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password,setPassword]= useState("")

  const passwordGenerator= useCallback( ()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass=""

    if(numAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*()_+{}|[]\;:,./?><"

    for (let i = 0; i < length; i++) {
      let idx= Math.floor(Math.random()*str.length)
      pass+=str[idx];
    }
    setPassword(pass)

  }, [length,numAllowed, charAllowed])

  useEffect( passwordGenerator, [length,charAllowed,numAllowed])
  
  //useRef 
  const passRef= useRef(null)

  const copyPassword= useCallback(()=>{
    passRef.current?.select() //'?' (optional chaining operator) in middle is used to Checkc if passRef.current is not null or undefined before attempting to access
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className="text-white text-center">Password Generator</h1>


        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full px-3 py-1" value={password}  placeholder="password" ref={passRef} readOnly />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>copy</button>

        </div>


        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-4">

            <input type="range" min={6} max={20} value={length} className="cursor-pointer" onChange={(e)=>setLength(e.target.value)} />
            <label >length:{length}</label>

            <input type="checkbox" value={numAllowed} onChange={()=>{
                setNumAllowed( prev => !prev)
              }
            } />
            <label >Number</label>

            <input type="checkbox" value={charAllowed} onChange={()=>{
                setCharAllowed( prev => !prev)
              }
            } />
            <label >Character</label>

          </div>
        </div>
       
      </div>
    </>
  )
}

export default App
