import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialAllowed, setspecialAllowed] = useState(false)
  const [password, setPassword] = useState("")

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
    console.log(pass)
    setPassword(pass)

  }, [numAllowed, specialAllowed, length, setPassword])

  useEffect(() => {
    passwordGenerator()
  }
    , [length, numAllowed, specialAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-2xl bg-gray-700 rounded-lg px-8 py-4 m-auto mt-5 flex flex-col justify-center'>

        <h1 className="text-white text-4xl al text-center my-4" > Password Generator</h1>


        <div
          className='mx-auto w-4/5'
        >
          <input
            className='py-3 px-4 rounded-l-xl w-4/5'
            type="text"
            placeholder={password}
            readOnly

          />
          <button
            className='bg-blue-500 rounded-r-xl py-3 px-4 w-1/5 my-3'
          >Copy</button>
        </div>

        <div className='flex justify-around items-center my-5'>

          <div>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value) }}
            />
            <label>{length}</label>
          </div>

          <div>

            <input type="checkbox"
              defaultChecked={numAllowed}
              id="numbers"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numbers">Numbers</label>


          </div>


          <div>

            <input type="checkbox"
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
