import { Type } from './actionExpenses';

const reducerExpenses = (state = null, { type, payload }) => {
  switch (type) {
    case Type.ADD_EXPENSE: {
      return [...state, payload];
    }
    case Type.REMOVE_EXPENSE: {
      return state.filter(item => item.id !== payload);
    }

    default:
      return state;
  }
};

export default reducerExpenses;
