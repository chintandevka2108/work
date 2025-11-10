import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (

    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap 
       justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-4 shadow-lg bg-amber-950 px-4 py-4 rounded-2xl'>
          <button
          onClick={()=> setColor("red")} className='outline-none px-2 text-white rounded-full'
           style={{backgroundColor: "red"}}>RED</button>

          <button 
             onClick={()=> setColor("green")} className='outline-none px-2 text-white rounded-full' 
          style={{backgroundColor: "green"}}>Green</button>

          <button 
           onClick={()=> setColor("yellow")}className='outline-none px-2 text-dark rounded-full' 
          style={{backgroundColor: "yellow"}}>Yellow</button>

            <button 
           onClick={()=> setColor("white")}className='outline-none bg-black px-2 text-dark rounded-full' 
          style={{backgroundColor: "white"}}>
            white</button>

             <button 
           onClick={()=> setColor("blue")}className='outline-none px-2 text-dark rounded-full' 
          style={{backgroundColor: "blue"}}>blue</button>

             <button 
           onClick={()=> setColor("pink")}className='outline-none px-2 text-white rounded-full' 
          style={{backgroundColor: "pink"}}>pink</button>
        </div>
      </div>
    </div>

  )
}

export default App
