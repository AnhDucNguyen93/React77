import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ojb = {
    name: 'Anh Duc',
    age: 18,
    address: 'Ha Tinh',
  }

  // const [name, age, address] = ojb;
  const [age1, setAge1] = useState(ojb.age);

  function upAge() {
    setAge1((age1) => age1 + 1)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Test infoOjb={ojb} age1={age1} upAge={upAge} />
      </div>
    </>
  )
}

export default App
