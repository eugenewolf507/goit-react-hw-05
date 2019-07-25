import Type from './BudgetForm';

const InitialState = 5;

const reducerBudgetForm = (state = InitialState, { type, payload }) => {
  switch (type) {
    case Type.ADD_BUDGET: {
      console.log('hhhhhhh');
      return state + payload;
    }

    default:
      return state;
  }
};

export default reducerBudgetForm;
