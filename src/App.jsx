import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialAllowed, setspecialAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let index = ""

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) letters += "1234567890"
    if (specialAllowed) letters += "!@#$%^&*()_+-={}[]"

    for (let i = 1; i <= length; i++) {
      index = Math.floor(Math.random() * letters.length + 1)
      pass += letters.charAt(index)

    }
    setPassword(pass)

  }, [numAllowed, specialAllowed, length, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }
    , [length, numAllowed, specialAllowed, passwordGenerator])

  return (
    <>

      <div className=' w-full outer max-w-2xl bg-black rounded-lg px-8 py-4 m-auto  flex flex-col justify-center  shadow-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>

        <h1 className=" text-white max-sm:text-3xl text-4xl al text-center my-4" > Password Generator</h1>

        <div
          className='max-sm:w-[100%] mx-auto w-4/5 my-3'>

          <input className='py-3 px-4 rounded-l-xl w-4/5 selection:bg-brightgreen focus:outline-none'
            type="text"
            placeholder="password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='bg-green hover:bg-brightgreen transition duration-300 ease-in-out rounded-r-xl py-3 px-4 text-white w-1/5 my-3'
          >Copy</button>
        </div>

        <div className='max-sm:flex-col max-sm:justify-between max-sm:h-[100px] max-sm:items-start  flex justify-around items-center my-5 text-white '>

          <div className="flex items-center  gap-x-1 ">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer accent-brightgreen'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>{length}</label>
          </div>

          <div className="flex items-center gap-x-1" >
            <input
              className='accent-brightgreen h-4 w-4'
              type="checkbox"
              defaultChecked={numAllowed}
              id="numbers"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 " >
            <input
              className='accent-brightgreen h-4 w-4 '
              type="checkbox"
              defaultChecked={specialAllowed}
              id="special"
              onChange={() => {
                setspecialAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="special">Special Characters</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
