import { useEffect, useState } from "react"
import timeDifferenceGenerator from "../utils/timeDifferenceGenerator"

export type TimerState = "stop" | "start" | "pause" | "restart"

export default function useTimer() {
  const [timerState, setTimerState] = useState<TimerState>("stop")
  const [timer, setTimer] = useState<Generator>(timeDifferenceGenerator(0))
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [timePassed, setTimePassed] = useState<number>(0)
  const [lapStartTime, setLapStartTime] = useState<number>(0)
  const [timeoutFlag, setTimeoutFlag] = useState<number>(0)

  function startTimer() {
    return setTimeout(() => {
      setTimePassed(timer.next().value)

      setTimeoutFlag(startTimer())
    }, 1000 / 16)
  }

  function startTimer1() {
    return setInterval(() => {
      setTimePassed(timer.next().value)
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
        setTimeoutFlag(startTimer1())
        break
      case "pause":
        stopTimer()
        break
      case "restart":
        setTimeoutFlag(startTimer1())
        break
    }
    return stopTimer
  }, [timerState])

  const setTimerStateAndTimes = (timerStateParam: TimerState) => {
    switch (timerStateParam) {
      case "stop":
        setTimer(timeDifferenceGenerator(0))
        setTimePassed(0)
        setCurrentTime(0)
        setLapStartTime(0)
        break
      case "start":
        break
      case "pause":
        setCurrentTime(timePassed)
        break
      case "restart":
        setTimer(timeDifferenceGenerator(currentTime))
        break
    }
    setTimerState(timerStateParam)
  }

  const updateLapStartTime = () => {
    setLapStartTime(timePassed)
  }

  return {
    timePassed,
    lapRecord: timePassed - lapStartTime,
    timerState,
    setTimerStateAndTimes,
    updateLapStartTime,
  }
}
