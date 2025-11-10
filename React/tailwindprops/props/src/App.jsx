import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "chintan",
    age: 22
  }
  let newArr = [1, 2, 3]
  return (
    <>
     <Cards channel="codeplex" btnText="click me as a partner"/><br />

     <Cards username="chintan" btnText="click me as a user"/>
    </>
  )
}

export default App
