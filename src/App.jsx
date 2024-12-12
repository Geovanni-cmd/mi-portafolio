import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline"> Hello world!    </h1>

      <div className='container mx-auto border-inherit border-2'>
        <p className='box-decoration-slice'>Informacion adicional de pruebas</p>
      </div>
      <span class="box-decoration-clone border-inherit  border-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Hello<br />
        World
      </span>

<br />
      <div class="bg-white w-128 h-72 rounded-lg">
        <div class="flex p-2 gap-1">
          <div class="">
            <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div class="card__content">
          <h1>Datos para ver que se muestra dentro del panel </h1> 
        </div>
      </div>

    </>
  )
}

export default App
