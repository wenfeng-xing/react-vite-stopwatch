import { useMemo } from "react"
import styled from "styled-components"
import { formatTimeToText } from "../utils/timerConverter"

const WrapperLapsList = styled.div`
  & {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 350px;
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const LapElement = styled.div`
  & {
    font-size: 1rem;
    flex: 0 0 2rem;
    width: 350px;
    border-top: white 0.1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & p {
    margin: 0;
  }
`
const placeHolding = [-1, -1, -1, -1, -1, -1]

interface LapsListProps {
  lapsList: Array<number>
}

export default function LapsList({ lapsList }: LapsListProps) {
  const lapsListToDisplay = useMemo(
    () =>
      lapsList.length < 6 ? [...lapsList, ...placeHolding] : [...lapsList],
    [lapsList.length]
  )

  return (
    <WrapperLapsList>
      {lapsListToDisplay.map((element, index) => {
        return element === -1 ? (
          <LapElement key={index}></LapElement>
        ) : (
          <LapElement key={index}>
            <p>{`Lap ${lapsList.length - index}`}</p>
            <p>{formatTimeToText(element as number)}</p>
          </LapElement>
        )
      })}
    </WrapperLapsList>
  )
}
