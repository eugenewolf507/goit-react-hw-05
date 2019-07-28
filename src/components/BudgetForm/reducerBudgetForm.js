import { Type } from './actionBudgetForm';

const reducerBudgetForm = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_BUDGET: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default reducerBudgetForm;
