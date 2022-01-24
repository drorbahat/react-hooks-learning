import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  const downCount = () => {
    setCount(prevCount => prevCount - 1)
    setColor("red")
  }

  const upCount = () => {
    setCount(prevCount => prevCount + 1)
    setColor("green")
  }


  return (
    <div className="App">
      <button onClick={downCount}>-</button>
      <span style={{ color: color }}>{count}</span>
      <button onClick={upCount}>+</button>
    </div>
  );
}

export default App;