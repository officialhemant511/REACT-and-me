import { useState } from "react"

function App() {
  let [color, setColor] = useState("#fffff")
  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 shadow-black  ">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border-2 border-red-500">
            <button onClick = {()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick = {()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button onClick = {()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick = {()=>setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}}>violet</button>
            <button onClick = {()=>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>
            <button onClick = {()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
           </div>
         </div>
      </div>
    </>
  )
}

export default App
