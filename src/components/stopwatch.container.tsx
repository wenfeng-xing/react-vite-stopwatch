import Controls from "./controls.component"
import TimeDisplay from "./timeDisplay.component"
import styled from "styled-components"
import LapsList from "./lapsList.component"

import { useEffect, useState } from "react"
import useTimer from "../hooks/useTimer.hook"

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
  const {
    timePassed,
    lapRecord,
    timerState,
    setTimerStateAndTimes,
    updateLapStartTime,
  } = useTimer()
  const [lapsRecordList, setlapsRecordList] = useState<number[]>([])

  useEffect(() => {
    if (lapRecord !== 0) {
      let temp: number[] = lapsRecordList
      temp[0] = lapRecord
      setlapsRecordList([...temp])
    }
  }, [lapRecord])

  const handleStartStopClick = () => {
    switch (timerState) {
      case "stop":
        setTimerStateAndTimes("start")
        break
      case "start":
        setTimerStateAndTimes("pause")
        break
      case "pause":
        setTimerStateAndTimes("restart")
        break
      case "restart":
        setTimerStateAndTimes("pause")
        break
    }
  }

  const handleLapResetClick = () => {
    switch (timerState) {
      case "start":
      case "restart":
        updateLapStartTime()
        setlapsRecordList([0, ...lapsRecordList])
        break
      case "pause":
        setTimerStateAndTimes("stop")
        setlapsRecordList([])
        break
    }
  }

  return (
    <Container>
      <TimeDisplay time={timePassed} />
      <Controls
        handleStartStopClick={handleStartStopClick}
        handleLapResetClick={handleLapResetClick}
        timerState={timerState}
      />
      <LapsList lapsList={lapsRecordList} />
    </Container>
  )
}
