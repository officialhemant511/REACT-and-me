import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // this is a hook which change all the state at once at a time it will give 2 things 1. variable 2. fuction

  let [count, setcounter] = useState(15);
  // let count = 5;
  const addval = () => {
    console.log(count);
    count = count + 1;
    setcounter(count)
  }
  const removeval = () => {
    count = count - 1;
    if (count < 0){
      count = 0;
    setcounter(count);
    }
    else {
    setcounter(count)
  }
}
return (
  <>
    <h1>Hemant aur react</h1>
    <h2>Counter value: {count}</h2>

    <button onClick={addval}>Add value</button>
    <button onClick={removeval}>remove value</button>
  </>
)
}

export default App
