import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    balance: 0,
    invoices: [],
  },
  reducers: {
    addMoney(state, action){
      state.balance += action.payload
    },
    withdrawMoney(state, action){
      state.balance -= action.payload
    },
    addInvoice(state, action){
      state.invoices.push(action.payload)
    }
  }
})

export default bankSlice.reducer;

export const { addMoney, withdrawMoney, addInvoice } = bankSlice.actions 