import { Type } from './actionExpenseForm';

const reducerExpenseForm = (state = null, action) => {
  switch (action.type) {
    case Type.ADD_EXPENSE: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
};

export default reducerExpenseForm;
