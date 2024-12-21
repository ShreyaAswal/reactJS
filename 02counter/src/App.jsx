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
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)  //even after writing 'setCounter' 4 times it only increases the value once,because 'useState' send the changes in UI/variable in batches
                          //thus, treating all these change as a single change (and updating the value of counter onl once)
  }

  const minusOne = ()=>{
  //   counter-=1
  
    // setCounter( (prevCounter)=>{ // it brings the current value of counter with it. Value which is about to get updated
    //   if(prevCounter==0)return prevCounter;
    //   else return prevCounter-1
    // })

    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)//it will update the value value of counter 4 times, as in this setCounter is accepting a callBack func and when a func complete only then the other func calls
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
