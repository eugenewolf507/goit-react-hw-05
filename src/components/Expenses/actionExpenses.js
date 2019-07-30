import shortid from 'shortid';

export const Type = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const addExpense = ({ amount, name }) => ({
  type: Type.ADD_EXPENSE,
  payload: { id: shortid(), amount: Number(amount), name },
});

export const removeExpense = id => ({
  type: Type.REMOVE_EXPENSE,
  payload: id,
});
