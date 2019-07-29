export const calculateTotalExpenses = state => {
  return state.expenses.reduce((acc, value) => acc + value.amount, 0);
};

export const calculateBalance = state =>
  state.budget - calculateTotalExpenses(state);
