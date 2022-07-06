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

function getBestLapRecordIndex(
  lapsRecordList: number[],
  currentBestLapRecordIndex: number
): number {
  if (currentBestLapRecordIndex !== -1) {
    return lapsRecordList[0] < lapsRecordList[currentBestLapRecordIndex]
      ? 0
      : currentBestLapRecordIndex
  }

  return 0
}

function getWorstLapRecordIndex(
  lapsRecordList: number[],
  currentWorstLapRecordIndex: number
): number {
  if (currentWorstLapRecordIndex !== -1) {
    return lapsRecordList[0] > lapsRecordList[currentWorstLapRecordIndex]
      ? 0
      : currentWorstLapRecordIndex
  }

  return 0
}

export default function StopWatch() {
  const {
    timePassed,
    lapRecord,
    timerState,
    setTimerStateAndTimes,
    updateLapStartTime,
  } = useTimer()
  const [lapsRecordList, setLapsRecordList] = useState<number[]>([])
  const [bestLapRecordIndex, setBestLapRecordIndex] = useState<number>(-1)
  const [worstLapRecordIndex, setWorstLapRecordIndex] = useState<number>(-1)

  useEffect(() => {
    if (lapRecord !== 0) {
      let temp: number[] = lapsRecordList
      temp[0] = lapRecord
      setLapsRecordList([...temp])
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
        const currentBestLapRecordIndex = getBestLapRecordIndex(
          lapsRecordList,
          bestLapRecordIndex
        )
        const currentWorstLapRecordIndex = getWorstLapRecordIndex(
          lapsRecordList,
          worstLapRecordIndex
        )
        setLapsRecordList([0, ...lapsRecordList])
        setBestLapRecordIndex(currentBestLapRecordIndex + 1)
        setWorstLapRecordIndex(currentWorstLapRecordIndex + 1)
        break
      case "pause":
        setTimerStateAndTimes("stop")
        setLapsRecordList([])
        setBestLapRecordIndex(-1)
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
      <LapsList
        lapsList={lapsRecordList}
        bestLapRecordIndex={bestLapRecordIndex}
        worstLapRecordIndex={worstLapRecordIndex}
      />
    </Container>
  )
}
