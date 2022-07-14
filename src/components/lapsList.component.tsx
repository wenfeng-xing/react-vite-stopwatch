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

type RecordType = "BEST" | "WORST" | null

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
    font-weight: bold;
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

function highlightBestWorstLapRecord(
  bestLapRecordIndex: number,
  worstLapRecordIndex: number,
  currentIndex: number
): RecordType {
  console.log("worst record lap", worstLapRecordIndex)
  if (bestLapRecordIndex === currentIndex) {
    return "BEST"
  }
  if (worstLapRecordIndex === currentIndex) {
    return "WORST"
  }
  return null
}

const placeHolding = ["", "", "", "", "", ""]

interface LapsListProps {
  lapsList: Array<string | number>
  bestLapRecordIndex: number
  worstLapRecordIndex: number
}

export default function LapsList({
  lapsList,
  bestLapRecordIndex,
  worstLapRecordIndex,
}: LapsListProps) {
  const lapsListToDisplay = useMemo(() => {
    return lapsList.length < 6 ? [...lapsList, ...placeHolding] : lapsList
  }, [lapsList])

  return (
    <WrapperLapsList>
      {lapsListToDisplay.map((element, index) => {
        return element === "" ? (
          <LapElement key={index}></LapElement>
        ) : (
          <LapElement
            key={index}
            record={highlightBestWorstLapRecord(
              bestLapRecordIndex,
              worstLapRecordIndex,
              index
            )}
          >
            <p>{`Lap ${lapsList.length - index}`}</p>
            <p>{formatTimeToText(element as number)}</p>
          </LapElement>
        )
      })}
    </WrapperLapsList>
  )
}
