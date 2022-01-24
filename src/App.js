import './App.css';
import { useState, useMemo } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFun(number)
  }, [number])
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : dark
  }

  return (
    <div className="App">
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

const slowFun = (num) => {
  console.log('calling slow function')
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2
}

export default App;