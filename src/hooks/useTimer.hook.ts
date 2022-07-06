import { Reducer, useReducer } from "react";
import { reducer, initialState} from "../store/timer.store"

export default function useTimer () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleClickStartStopButton = () => {
    dispatch({type: "startStopButtonClick"})
  }
  const handleClickLapResetButton = () => {
    dispatch({type: "lapResetButtonClick"})
  }
  return {timerState: state.timerState, handleClickStartStopButton, handleClickLapResetButton}
}