export const calculateTotalExpenses = state => {
  return state.expenses.reduce((acc, value) => acc + Number(value.amount), 0);
};

export const calculateBalance = state => {
  console.log(state);
  console.log(state);
};
