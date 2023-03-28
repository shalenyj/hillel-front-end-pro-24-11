import axios from 'axios'

export const ADD_MONEY = 'ADD_MONEY';
export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';
export const GET_ITEMS = 'GET_ITEMS';

const getItems = todo => ({
  type: GET_ITEMS,
  payload: todo
});

export const getItem = (dispatch) => {
  axios.get(`https://jsonplaceholder.typicode.com/todos`)
  .then(res => {
    dispatch(getItems(res.data));
  })
}