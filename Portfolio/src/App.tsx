import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/www/site/NavBar'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [contador, setCount] = useState(0)
function addContador1(){
  console.log('sumando')
}
const addContador = () => {
  setCount(contador + 1)
}



  return (
    <div className='container-full'>
      <Navbar />
      <AppRoutes />
      <h1 className='text-3xl text-blue-500'>Hola mundo</h1>
      <button onClick={addContador}>Contador</button>
      <h4>Contador: {contador } </h4>

    </div>

  )
}

export default App
