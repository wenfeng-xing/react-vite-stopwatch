import StopWatch from "./components/stopwatch.container"
import styled from "styled-components"

const ContainerApp = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <ContainerApp>
      <StopWatch />
    </ContainerApp>
  )
}

export default App
