import styled from "styled-components"
import { internalState } from "../store/timer.store"

const WrapperControls = styled.section`
  flex: 1 1 15%;
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BasicButton = styled.button`
  & {
    margin: 0 10px;
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    font-size: 1rem;
  }
  &:hover {
    width: 5.2rem;
    height: 5.2rem;
  }
  &:active {
    width: 4.8rem;
    height: 4.8rem;
  }
`

const LeftButton = styled(BasicButton)`
  & {
    outline: rgb(51, 51, 51) solid 2px;
    border: 3px solid black;
    background-color: rgb(51, 51, 51);
    color: white;
  }
  &:hover {
    background-color: rgb(81, 81, 81);
  }
  &:active {
    background-color: rgb(26, 26, 26);
  }
`

const RightButton = styled(BasicButton)`
  & {
    outline: rgb(49, 33, 7) solid 2px;
    border: 3px solid black;
    background-color: rgb(49, 33, 7);
    color: rgb(221, 87, 81);
  }
  &:hover {
    background-color: rgb(79, 63, 37);
  }
  &:active {
    background-color: rgb(25, 16, 4);
    color: rgb(221, 87, 81);
  }
`

interface ControlsProps {
  handleStartStopClick: () => void
  handleLapResetClick: () => void
  timerState: internalState
}

export default function Controls({
  handleStartStopClick,
  handleLapResetClick,
  timerState,
}: ControlsProps) {
  const getButtonStartOrStop = (timerState: internalState) =>
    timerState === "pause" || timerState === "stop" ? "Start" : "Stop"
  const getButtonLapsOrReset = (timerState: internalState) =>
    timerState === "start" || timerState === "stop" || timerState === "restart"
      ? "Laps"
      : "Reset"

  return (
    <WrapperControls>
      <LeftButton onClick={handleLapResetClick}>
        {getButtonLapsOrReset(timerState)}
      </LeftButton>
      <RightButton onClick={handleStartStopClick}>
        {getButtonStartOrStop(timerState)}
      </RightButton>
    </WrapperControls>
  )
}
