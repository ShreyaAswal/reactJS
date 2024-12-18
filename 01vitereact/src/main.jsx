import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Comp1 from './Comp1.jsx'

//if app is a function thus we can also create our own function
function MyApp(){
  return(
    <h1>hello, how are you</h1> //each react use a bundler (like babble , vite(it is itself a bundler)), and their work is to transpile the syntax of jsx ->js
                                //each bundler convert react element into a tree type structure , which is understandable by react
  )
}


//--------creation of react element using js and jsx --------

const elementOne=(<a href="https://www.google.com" target="_blank">link for google</a>) //creation of react element using jsx (bundler calls the React.createElement function to create this element)

const username="shreya Aswal"
const elementTwo= React.createElement(
  'a',
  {href:"https://www.google.com", 
  target:"_blank"},
  "link for google js",
  username
) //creation using js (here we dont need bundler , we are directly calling the function)
//and also after the whole tree is created only after that , the variables/evaluated expressions get injected in it

ReactDOM.createRoot(document.getElementById('root')).render(
  
  //<App /> 
  //MyApp() // as it is a func i can also write this in MyApp() method as well
  elementTwo
)
