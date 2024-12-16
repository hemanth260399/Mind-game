import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [points, setpoints] = useState(0)
  let [ranNumber, setranNumber] = useState("")
  let count = 0
  let intervelIdRef = useRef()
  let randomNumber = (min, max) => {
    if (count === 61) {
      clearInterval(intervelIdRef.current)
      alert("Game Finished")
    }
    count++
    let temp = Math.floor(Math.random() * (max - min + 1)) + min;
    setranNumber(`box-${temp}`)
  }
  let startButton = () => {
    intervelIdRef.current = setInterval(() => randomNumber(1, 9), 800)
  }
  let resetButton = () => {
    setpoints(0)
    setranNumber("")
  }
  let addPoints = (currentNumber) => {
    if (ranNumber === currentNumber) {
      setpoints(points + 5)
    } else {
      if (points === 0) setpoints(0)
      else setpoints(points - 2.5)
    }
  }
  return (
    <>
      {console.log(ranNumber)}
      <h2>Mind Game</h2>
      <h3>Points:{points}</h3>
      <div className='outerBox'>
        {Array(9).fill().map((_, index) => {
          return (
            < button key={index} className='flipBox' name={`box-${index + 1}`} onClick={() => addPoints(`box-${index + 1}`)}>{ranNumber === `box-${index + 1}` && "   O   "}</button>
          )
        })}
      </div >
      <button onClick={startButton} style={{ marginTop: 20 }}>START</button>
      <button onClick={resetButton} style={{ marginTop: 20 }}>RESET</button>
    </>
  )
}

export default App
