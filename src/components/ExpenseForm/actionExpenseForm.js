export const Type = {
  ADD_EXPENSE: 'ADD_EXPENSE',
};

const addExpense = (budgetAmountInput, budgetNameInput) => ({
  type: Type.ADD_EXPENSE,
  payload: { budgetAmountInput, budgetNameInput },
});

export default addExpense;
