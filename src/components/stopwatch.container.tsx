import Controls from "./controls.component"
import TimeDisplay from "./timeDisplay.component"
import styled from "styled-components"
import LapsList from "./lapsList.component"

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
  const { timerState, handleClickStartStopButton, handleClickLapResetButton } =
    useTimer()

  return (
    <Container>
      <TimeDisplay time={1000000} />
      <Controls
        handleStartStopClick={handleClickStartStopButton}
        handleLapResetClick={handleClickLapResetButton}
        timerState={timerState}
      />
      <LapsList
        lapsList={[]}
        bestLapRecordIndex={-1}
        worstLapRecordIndex={-1}
      />
    </Container>
  )
}
