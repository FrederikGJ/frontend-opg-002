import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import yorkshireImage from './assets/yoork.png'; // Adjust the path as necessary
import obj from './file2.js'; './file2.js'
import { males, females } from './file2.js';



function App() {

  const {name, email} = obj // Destructuring

  console.log([...males, ...females])
  console.log([...males, "Henrik", "JOhn", "lolo", ...females, "Pia", "Lone"])




  return (
    <>
      <img src={reactLogo} className="react-logo" alt="react-logo" />
      <h1>Vite + React</h1>
      <h2> Det er lidt hacked det her ?  </h2>
      <div className='textbox'>

        <p> Jeg hedder {name} </p>
        <p> Min mail er {email} </p>

      </div>
      <h3>Jeg hedder ikke John John  </h3>

      <div>
        <img src={yorkshireImage} alt="yorkshire" />
      </div>




    </>
  )
}


export default App
