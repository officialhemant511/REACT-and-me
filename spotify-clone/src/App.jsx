import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] bg-black">
      {/* <div className="bg-green-500">Sidebar</div>
      <div className="bg-red-500">Main Content</div>
      <div className="col-span-2 bg-yellow-500">Player</div> */}
    </div>
    </>
  )
}

export default App
