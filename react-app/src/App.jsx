import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [helloData, setHelloData] = useState([])
  const [yeey, setYeey] = useState('aaa')
  const [addresses, setAddresses] = useState({})

  const handleGetHelloClick = async (e) => {
    const gotDataJson = await fetch('/api/hello')
    const gotData = await gotDataJson.json()
    console.log('gotData', gotData)
    setHelloData(gotData)
  }

  const handleYeeyClick = async (e) => {
    const gotDataJson = await fetch('https://nothing-backend.vercel.app/express')
    const gotData = await gotDataJson.json()
    console.log('gotData', gotData)
    setYeey(gotData)
  }  

  
  const handleLatLongClick = async (e) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function success(position){
        const {latitude, longitude} = position.coords
        const gotDataJson = await fetch('https://nothing-backend.vercel.app/geolocation', {
          body: JSON.stringify({latitude, longitude})
        })
        const gotData = await gotDataJson.json()
        console.log('gotData', gotData)
        setAddresses(gotData)
      }, console.warn)
    }


  }   

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h1>Vercel Function</h1>
      <div className="card">
        <button onClick={handleGetHelloClick}>
          GET /api/hello
        </button>
        <p>
          {JSON.stringify(helloData)}
        </p>
      </div>   

      <h1>Express yeey</h1>
      <div className="card">
        <button onClick={handleYeeyClick}>
          GET Yeey
        </button>
        <p>
          {JSON.stringify(yeey)}
        </p>
      </div> 

      <h1>LatLong address</h1>
      <div className="card">
        <button onClick={handleLatLongClick}>
          Post my geolocation
        </button>
        <p>
          {JSON.stringify(addresses)}
        </p>
      </div>             

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
