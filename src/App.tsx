import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <section className="wrapper-time-display">
          <p>00:00.00</p>
        </section>
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
