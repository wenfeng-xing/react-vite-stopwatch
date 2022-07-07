import { Reducer, useReducer, useState } from "react";
import { reducer, initialState} from "../store/timer.store"
import timeDifferenceGenerator from "../utils/timeDifferenceGenerator";

export default function useTimer () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [timer, setTimer] = useState<Generator>(timeDifferenceGenerator(0))
  const [timeoutFlag, setTimeoutFlag] = useState<number>(0)

  function startTimer1() {
    return setInterval(() => {
      setTimePassed(timer.next().value)
    }, 1000 / 16)
  }

  const stopTimer = () => {
    clearInterval(timeoutFlag)
  }

  const handleClickStartStopButton = () => {
    dispatch({type: "startStopButtonClick"})
  }
  const handleClickLapResetButton = () => {
    dispatch({type: "lapResetButtonClick"})
  }
  return {timerState: state.timerState, handleClickStartStopButton, handleClickLapResetButton}
}