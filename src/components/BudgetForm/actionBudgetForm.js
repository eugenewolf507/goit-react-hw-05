export const Type = {
  ADD_BUDGET: 'ADD_BUDGET',
};

export const addBudget = value => ({
  type: Type.ADD_BUDGET,
  payload: value,
});
