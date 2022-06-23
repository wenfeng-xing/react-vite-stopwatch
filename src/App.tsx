
import Controls from './components/controls.component'
import TimeDisplay from './components/timeDisplay.component'
import styled from "styled-components";
import LapsList from './components/lapsList.component';

const ContainerApp = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  border-radius: 1rem;
  height: 667px;
  width: 375px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function App() {

  return (
    <ContainerApp>
      <Container>
        <TimeDisplay />
        <Controls />
        <LapsList />
      </Container>
    </ContainerApp >
  )
}

export default App
