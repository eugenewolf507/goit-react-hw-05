import { Type } from './actionBudgetForm';

const initialState = {
  budget: 0,
};

console.log(Type);

const reducerBudgetForm = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_BUDGET: {
      console.log('hhhhhhh');
      return action.payload;
    }

    default:
      return state;
  }
};

export default reducerBudgetForm;
