import styled from "styled-components"
import { formatTimeToText } from "../utils/timerConverter"

const WrapperTimeDisplay = styled.section`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 5.5rem;
  font-variant-numeric: tabular-nums;
`

const TimeText = styled.p`
  margin-top: 100px;
`

interface TimeDisplayProps {
  time: number
}

export default function TimeDisplay({ time }: TimeDisplayProps) {
  return (
    <WrapperTimeDisplay>
      <p>{formatTimeToText(time)}</p>
    </WrapperTimeDisplay>
  )
}
