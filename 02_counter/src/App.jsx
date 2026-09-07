import { useState } from 'react'
import './App.css'

function App() {
  let[counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
    //In this step the counter will update the value 1 not 2 
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    //in this step the counter will remove the value by multiple of 3
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <div className='main'>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter} </p>
    </div>
  )
}

export default App
