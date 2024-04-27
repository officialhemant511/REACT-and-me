import React, { useState } from 'react'

function Todoinput(props) {
  const [inputText,setInputText] = useState("");

  return (
    <>    
    <div className='flex justify-center items-center mt-8'>
      <input className='bg-white rounded-lg h-8 px-4' type="text" value={inputText} placeholder='Enter your task  ' onChange={(e)=>setInputText(e.target.value)} />
      <button className='ml-2 rounded-xl w-8 h-8 bg-blue-600 text-white' onClick={(e)=>{props.addList(inputText); setInputText("")}}>
        <span>
          <i class="fa-solid fa-plus"></i>
        </span>
      </button>
      
    </div>
    </>
  )
}

export default Todoinput