import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//variables are updating perfectly, but their state change is not updated in UI, UI and state change are not in sync 
//thus we use React, as it reacts everytime a variable gets updated

//hooks -> hooks are the methods through which we update the data in UI, just after their state got changed, using hooks react updated their values in all places of UI at once

//each hook perform a specific and special task
// Hooks can only be called inside of the body of a function component

//------useState()------ 
// //it takes a default value(it can be anything -true, 15,{object} etc) of the variable as a parameter
//it returns an array [updated value,function] function which is used to set/wpdate counter value;



//let counter= 15; not correct way


function App() {

  const [counter,setCounter]=useState(15)
  
  const addOne = () => {
    // counter+=1
    setCounter(counter+1) //directly return counter+1
    console.log(counter)
  }

  const minusOne = ()=>{
  //   counter-=1
  
    setCounter( ()=>{
      if(counter==0)return counter;
      else return counter-1
    })

    console.log('minus:',counter)
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h2>counter:{counter}</h2>
    <button onClick={addOne}>Add Value {counter} </button>
    <br />
    <button onClick={minusOne} >Decrease Value {counter} </button>
    <footer>counter:{counter}</footer>
    </>
  )
}

export default App
