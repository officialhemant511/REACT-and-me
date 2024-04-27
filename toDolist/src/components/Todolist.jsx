import React from 'react'


function Todolist(props) {
  return (
    <li className='bg-transparent text-white block mx-4 my-5 rounded-md h-9 p-1 px-4 border-2 border-white'>
       {props.item}

       <span className='float-end'>
       <i className="fa-solid fa-trash-can hover:text-red-400 transition duration-100" onClick={()=>{props.dltItem(props.index)}}></i>
       </span>
        </li>
  )
}

export default Todolist