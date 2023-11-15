import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import yorkshireImage from './assets/yoork.png'; // Adjust the path as necessary
import 'appelap/src/file2.js'



function App() {



  return (
    <>
      <img src={reactLogo} className="react-logo" alt="react-logo" />
      <h1>Vite + React</h1>
      <h2> Det er lidt hacked det her ?  </h2>
      <div className='textbox'>

        <p> Jeg hedder Jon </p>

      </div>
      <h3>Jeg hedder ikke John John  </h3>

      <div>
        <img src={yorkshireImage} alt="yorkshire" />
      </div>




    </>
  )
}


export default App
