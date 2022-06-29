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

type RecordType = "BEST" | "WORST"

const setColor = (record?: RecordType) => {
  switch (record) {
    case "BEST":
      return "green"
    case "WORST":
      return "red"
    default:
      return "white"
  }
}

interface LapElementProps {
  record?: RecordType
}

const LapElement = styled.div<LapElementProps>`
  & {
    font-size: 1rem;
    flex: 0 0 2rem;
    width: 350px;
    border-top: white 0.1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-variant-numeric: tabular-nums;
  }
  & p {
    margin: 0;
    color: ${(props) => setColor(props?.record)};
  }
`
const placeHolding = ["", "", "", "", "", ""]

interface LapsListProps {
  lapsList: Array<string | number>
}

export default function LapsList({ lapsList }: LapsListProps) {
  const lapsListToDisplay = useMemo(() => {
    return lapsList.length < 6 ? [...lapsList, ...placeHolding] : lapsList
  }, [lapsList])

  return (
    <WrapperLapsList>
      {lapsListToDisplay.map((element, index) => {
        return element === "" ? (
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
