import { Reducer, useReducer, useState, useEffect } from "react";
import timeDifferenceGenerator from "../utils/timeDifferenceGenerator";
import { reducer as timerReducer, initialTime, TimerActionPropsType} from "../store/timer.store";
export type TimerState = "stop" | "start" | "pause" | "restart"

export default function useTimer () {
  const [timer, timerDispatch] = useReducer(timerReducer, initialTime)
  const [timerState, setTimerState] = useState<TimerState>("stop")
  const [timeGenerator, setTimeGenerator] = useState<Generator>(timeDifferenceGenerator(0))
  const [timeoutFlag, setTimeoutFlag] = useState<number>(0)

  function startTimer() {
    return setInterval(() => {
      timerDispatch({type: "UPDATE_ELAPSEDTIME", payload: timeGenerator.next().value})
    }, 1000 / 16)
  }

  const stopTimer = () => {
    clearInterval(timeoutFlag)
  }

  useEffect(() => {
    switch (timerState) {
      case "stop":
        break
      case "start":
        setTimeoutFlag(startTimer())
        break
      case "pause":
        stopTimer()
        break
      case "restart":
        setTimeoutFlag(startTimer())
        break
    }
    return stopTimer
  }, [timerState])

  const handleClickStartStopButton = () => {
    switch (timerState) {
      case "stop":
        setTimerState("start")
        break
        case "start":
        setTimerState("pause")
        break
      case "pause":
        setTimerState("restart")
        break
      case "restart":
        setTimerState("pause")
        break
    }
  }

  const handleClickLapResetButton = () => {
    switch (timerState) {
      case "stop":
        break
      case "start":
        break
      case "pause":
        setTimerState("stop")
        break
      case "restart":
        break
    }
  }
  return {timerState, handleClickStartStopButton, handleClickLapResetButton}
}