
export interface LapsRecordPropsType {
  lapsRecordList: number[]
  bestLapRecordIndex: number
  worstLapRecordIndex: number
}

export const initialState: LapsRecordPropsType = {lapsRecordList: [], bestLapRecordIndex: -1, worstLapRecordIndex: -1 }

export const reducer = (state: LapsRecordPropsType, action): LapsRecordPropsType => {
  switch (action.type) {
    case "RESET_ALL_STATE":
      return {lapsRecordList: [], bestLapRecordIndex: -1, worstLapRecordIndex: -1 }
    case "ADD_NEW_LAP_RECORD":
      return {...state, lapsRecordList: [0, ...state.lapsRecordList]}
    case "UPDATE_CURRENT_LAP_RECORD":
      {
        const tempList = state.lapsRecordList
        tempList[0] = action.payload
        return {...state, lapsRecordList: tempList}
      }
    case "UPDATE_BEST_LAP_RECORD_INDEX":
      
  }
}