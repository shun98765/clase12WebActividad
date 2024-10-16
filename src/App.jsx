import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import State from './components/State'
import UseEffect from './components/useEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Prueba Boostrap</h1>
        <State/>
        <Form/>
        <UseEffect/>
      </div>
    </>
  )
}

export default App
