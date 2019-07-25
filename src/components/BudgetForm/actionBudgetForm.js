export const Type = {
  ADD_BUDGET: 'ADD_BUDGET',
};

export const addBudget = () => ({
  type: Type.ADD_BUDGET,
  payload: 2,
});
