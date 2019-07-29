import { Type } from './actionExpenses';

const reducerExpenses = (state = null, action) => {
  switch (action.type) {
    case Type.ADD_EXPENSE: {
      return [...state, action.payload];
    }
    case Type.REMOVE_EXPENSE: {
      console.log(state);
      console.log(action.payload);
      console.log(state.filter(item => item.id !== action.payload));
      return state.filter(item => item.id !== action.payload);
    }

    default:
      return state;
  }
};

export default reducerExpenses;
