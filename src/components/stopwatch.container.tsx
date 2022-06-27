import Controls from "./controls.component"
import TimeDisplay from "./timeDisplay.component"
import styled from "styled-components"
import LapsList from "./lapsList.component"
import { useEffect, useState } from "react"

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

export type TimerState = "initial" | "start" | "stop"

export default function StopWatch() {
  const [timerState, setTimerState] = useState<TimerState>("initial")

  const handleStartStopClick = () => {
    switch (timerState) {
      case "initial":
        setTimerState("start")
        break
      case "start":
        setTimerState("stop")
        break
      case "stop":
        setTimerState("start")
        break
    }
  }

  const handleLapResetClick = () => {
    switch (timerState) {
      case "start":
        break
      case "stop":
        setTimerState("initial")
        break
    }
  }

  return (
    <Container>
      <TimeDisplay time={0} />
      <Controls
        handleStartStopClick={handleStartStopClick}
        handleLapResetClick={handleLapResetClick}
        timerState={timerState}
      />
      <LapsList />
    </Container>
  )
}
