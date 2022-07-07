export interface TimerPropsType {
  currentTime: number
  elapsedTime: number
  lapStartTime: number
}

export type TimerActionType = "RESET_ALL_STATE" | "UPDATE_CURRENTTIME" | "UPDATE_ELAPSEDTIME" | "UPDATE_LAPSTARTTIME"

export interface TimerActionPropsType {
  type: TimerActionType
  payload: number
}

export const initialTime: TimerPropsType = {currentTime: 0, elapsedTime: 0, lapStartTime: 0}

export const reducer = (state: TimerPropsType, action: TimerActionPropsType): TimerPropsType => {
  switch (action.type) {
    case "RESET_ALL_STATE":
      return {currentTime: 0, elapsedTime: 0, lapStartTime: 0}
    case "UPDATE_CURRENTTIME":
      return {...state, currentTime: action.payload}
    case "UPDATE_ELAPSEDTIME":
      return {...state, elapsedTime: action.payload}
    case "UPDATE_LAPSTARTTIME":
      return {...state, lapStartTime: action.payload}
    default:
      throw new Error("The action type does not existe.")
  }
}