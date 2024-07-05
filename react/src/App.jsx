import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <form action="http://localhost:5500/api/create" encType='true' method='POST' className='flex justify-center align-item-center' >
      <input type="text" name='name' placeholder='Name' />
      <input type="email" name='email' placeholder='Email'/>
      <input type="text" name='contact' placeholder='Contact' />
      
      <button>Submit</button>

     </form>
    </>
  )
}

export default App
