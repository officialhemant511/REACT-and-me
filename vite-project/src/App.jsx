
import Show from "./hema"
function App() {
  const username = "Hemant with chai"
  return (
    <>
    {/* Here username with this bracket is evaluated expression */}
    <h1>Hemant is a good boy | Hemant Bhatt and {username}</h1>
    <Show/>
    </>
  )
}

export default App
