import { useState } from 'react'
import TimeDisplay from './components/timeDisplay.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <TimeDisplay />
        <section className="wrapper-controls">
          <button>Laps</button>
          <button>Start</button>
        </section>
        <section className="laps-list"></section>
      </div>
    </div>
  )
}

export default App
