import { useEffect, useState } from "react"

export type TimerState = "stop" | "start" | "pause"

const never = Number.MAX_SAFE_INTEGER

export default function useTimer() {
  const [timerState, setTimerState] = useState<TimerState>("stop")
  const [startTime, setStartTime] = useState<number>(never)
  const [timePassed, setTimePassed] = useState<number>(0)
  const [timeoutFlag, setTimeoutFlag] = useState<number>(0)

  useEffect(() => {
    function startTimer() {
      return setTimeout(() => {
        setTimePassed(Date.now() - startTime)

        setTimeoutFlag(startTimer())
      }, 500)
    }

    const stopTimer = () => {
      clearTimeout(timeoutFlag)
    }

    if (timerState === "start") {
      startTimer()
    }
    if (timerState === "pause") {
      stopTimer()
    }
    if (timerState === "stop") {
    }

    return stopTimer
  }, [timerState])

  const setTimerStateAndTimes = (timerStateParam: TimerState) => {
    if (timerStateParam === "start") {
      if (startTime === never) {
        setStartTime(Date.now())
      }
    } else if (timerStateParam === "pause") {
    } else if (timerStateParam === "stop") {
      setStartTime(never)
      setTimePassed(0)
    }
    setTimerState(timerStateParam)
  }

  return { timePassed, timerState, setTimerStateAndTimes }
}
