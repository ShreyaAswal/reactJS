import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'  


function App() {

  const obj1={
    username:"Shreya Aswal",
    date:"21/12/2024",
    age:"22"
  }

  const obj2={
    username:"Tanu Aswal",
    date:"21/12/2025",
    age:"21"
  }

  return (
    <>
      <h1 className='bg-red-400 text-white rounded-xl -4 m-4' >tailwind test</h1>
      {/* <Card  username="Shreya Aswal"/>
      <Card channel="youtube" myobj={obj1}/> */} 

      <Card2 myobj={obj1} btntext="click me"/>
      <Card2 myobj={obj2} btntext="press me"/>

    </>
  )
}

export default App
