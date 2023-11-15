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

  const objv2 = {
    ...obj,
    phone: 22553344,
    age: 25
  }

  console.log(objv2)



  return (
    <>
      <img src={reactLogo} className="react-logo" alt="react-logo" />
      <div className='textbox'>

        <p> Jeg hedder {name} </p>
        <p> Min mail er {email} </p>
        <p> Min telefon er {objv2.phone} </p>

      </div>
      <div>
        <img src={yorkshireImage} alt="yorkshire" />
      </div>
    </>
  )
}


export default App
