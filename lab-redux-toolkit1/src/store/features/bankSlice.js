import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  balance: 0,
  items: [],
}

export const fetchItems = createAsyncThunk(
  'todos/fetchTodos',
  async() => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos')
    return data
  }
)

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    addMoney(state, action){
      state.balance = state.balance + action.payload.money
    },
    withDrawMoney(state, action){
      state.balance = state.balance - action.payload.money
    }
  },
  extraReducers: {
    [fetchItems.fulfilled]:(state, data) => {
      console.log(data)
      state.items = data.payload;
    }
  }

})

console.log(bankSlice)

export const { addMoney, withDrawMoney } = bankSlice.actions

export default bankSlice.reducer