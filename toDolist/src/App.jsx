import { useState } from 'react'
import './App.css'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {
  const [listTodo,setlistTodo] = useState([])
  let addList = (inputText)=>{
    if(inputText==""){alert("Enter the valid task")}
    else
      setlistTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setlistTodo([...newListTodo])

  }
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        
        <div className='h-[500px] w-[350px] border-red-700 border-2 bg-gray-700'>
          <h1 className='text-white font-extrabold flex justify-center text-2xl my-4 underline'>ToDo List</h1>
         <Todoinput className="overflow-y-auto"addList={addList}/>
          <h1 className='text-xl text-white font-bold flex justify-center my-3'>TASK</h1>

          {listTodo.map((listItem,i)=>{
            return (
                <Todolist key={i} index ={i} item ={listItem} dltItem = {deleteListItem}/>
            )
          })
          }

        </div>      
      </div> 
    </>
  )
}

export default App
