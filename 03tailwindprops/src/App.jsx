import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let obj = {
    name: "hemant",
    level: "pro"
  }
  let arr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* this is how we use variables in react */}
      <Card name="Hemant" someobj = {obj} myarr={arr} /> 
      <Card name="Bhatt" btntxt ="visit me" />
    </>
  )
}

export default App
