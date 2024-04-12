import { useCallback, useState ,useEffect,useRef} from 'react'
import './App.css'
// import './index.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const [iscopy,setcopy] = useState(false);
  // ref hook to take take the address like things
  const passwordRef = useRef(null);

  const copypasstoclipboard = useCallback(()=>{
    passwordRef.current?.select()
    setcopy(true);
    window.navigator.clipboard.writeText(password);
  },[password])

  //generate 
  const generate = (()=>{
    passwordGenerator();
  })

  const passwordGenerator = useCallback(() => {
    setcopy(false);
    let str = "ASDFGHJKLMNBVCXZQWERTYUIOPasdfghjklmnbvcxzqwertyuiop";
    let pass = "";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`";

    // random no generator
    for (let i = 1; i <= length; i++) {
      const ind = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(ind);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword])

  // useEffect hook will generally call the function if any of the one dependency will change or click
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md-rounded-lg my-9 px-5 py-6 backdrop-blur-md rounded-md text-white h-72'><h1 className='text-3xl pb-4 '>Password Generator</h1>

        <div className='flex shadow-lg rounded-lg bg-white overflow-hidden mb-3 mt-4'>
          <input ref={passwordRef}
           type="text" value={password} className='outline-none w-full text-orange-600  py-1 px-3'placeholder='password' readOnly/>

          <button 
          onClick={copypasstoclipboard}
          className =" bg-blue-800 w-20 outline-none text-white px-3 py-0.5 shrink-0 ">{iscopy?"!copied":"copy"}</button>
        </div>

        <div className='flex text-sm gap-x-2 mt-10'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6}  max={100} value={length} className='cursor-pointer'
            onChange={(e)=>(setlength(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
             <input type="checkbox" id='numberInput' onChange={()=> {setnumberAllowed((prev)=>!prev)}}/>
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input type="checkbox" id='charinput' onChange={()=> {setcharAllowed((prev)=>!prev)}}/>
            <label htmlFor='charinput'>Character</label>
          </div>
        </div> 

        <div className='flex justify-center items-center py-1 '>
          <button onClick={generate} className=' w-24 bg-blue-600 text-white rounded-lg my-5'>
            Generate
          </button>
          </div>
      
      </div>
    </>
  )
}

export default App
