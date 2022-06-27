import Controls from "./controls.component"
import TimeDisplay from "./timeDisplay.component"
import styled from "styled-components"
import LapsList from "./lapsList.component"

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

export default function StopWatch() {
  return (
    <Container>
      <TimeDisplay />
      <Controls />
      <LapsList />
    </Container>
  )
}
