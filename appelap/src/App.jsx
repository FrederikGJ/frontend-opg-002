import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import yorkshire from 'appelap/src/assets/yorkshire.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={reactLogo} className="react-logo" alt="react-logo" />
      <h1>Vite + React</h1>
      <h2> Det er lidt hacked det her ?  </h2>
      <div className='textbox'>

        <p> Jeg hedder Jon </p>

      </div>
      <h3>Jeg hedder ikke John John  </h3>


    </>
  )
}

//

export default App
