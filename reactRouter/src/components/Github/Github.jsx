import React, { useEffect, useState } from 'react'

function Github(){
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/officialhemant511').then(response =>response.json()).then(data=>setdata(data))
    },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white text-3xl p-4 '>Github Following: {data.following}
    <img className='text-center' src="https://avatars.githubusercontent.com/u/120431671?v=4" alt="git image" width={300}/>
    </div>
  )
}
export default Github