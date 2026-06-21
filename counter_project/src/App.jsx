import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState('0')

  //let counter = 0

  let addValue = () => {
    //counter = counter + 1;
    //setCounter(Counter);     ORR....
    setCounter(counter + 1)
    console.log("Value Added", counter)
  }

  let RemoveValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <button
      onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
