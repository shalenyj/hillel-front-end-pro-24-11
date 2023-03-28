import { ADD_MONEY, GET_ITEMS, WITHDRAW_MONEY } from "../actions/bank"

const initialState = {
  balance: 0,
  items: []
}

export default function bankReducers(state = initialState, action){
  switch(action.type){
    case ADD_MONEY: {
      const newState = {
        ...state,
        balance: state.balance + action.payload.money
      }
      return newState
    }
    case WITHDRAW_MONEY: {
      const newState = {
        ...state,
        balance: state.balance - action.payload.money
      }
      return newState
    }
    case GET_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    }
    default: {
      return state
    }
  }
}