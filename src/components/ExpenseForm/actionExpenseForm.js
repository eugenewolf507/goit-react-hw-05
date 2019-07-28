export const Type = {
  ADD_EXPENSE: 'ADD_EXPENSE',
};

export const addExpense = ({ amount, name }) => ({
  type: Type.ADD_EXPENSE,
  payload: { amount, name },
});
