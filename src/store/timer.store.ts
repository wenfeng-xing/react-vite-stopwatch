export type internalState = "stop" | "start" | "pause" | "restart"

export interface timerStatesType {
  timerState: internalState
}

export type timerActionType = "startStopButtonClick" | "lapResetButtonClick"

export interface timerAction {
  type: timerActionType
}

export const initialState: timerStatesType = {timerState: "stop"}

export function reducer(state: timerStatesType, action: timerAction): timerStatesType {
  switch (action.type) {
    case "startStopButtonClick":
      switch (state.timerState) {
        case "stop":
          return {timerState: "start"}
        case "start":
          return {timerState: "pause"}
        case "pause":
          return {timerState: "restart"}
        case "restart":
          return {timerState: "pause"}
      }
  case "lapResetButtonClick":
    switch (state.timerState) {
      case "stop":
        return state
      case "start":
        return state
      case "pause":
        return {timerState: "stop"}
      case "restart":
        return state
    }
    break
  }
}