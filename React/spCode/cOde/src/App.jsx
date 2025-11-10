import { useState, useCallback, useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  ///useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)
    window.navigator.clipboard.writeText(password)
  },
  [password])

  // Generate password whenever options change
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  // Copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto 
      shadow-md rounded-lg px-4 my-8 text-amber-100 bg-gray-500'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-green-500'
          >
            Copy
          </button>
        </div>

        <div className='flex flex-col gap-y-2 text-sm'>
          {/* Length Slider */}
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers Checkbox */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numAllowed}
              id='numberInput'
              onChange={() => setNumAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Special Characters Checkbox */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              id='charInput'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
