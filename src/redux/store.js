import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducerBudgetForm from '../components/BudgetForm/reducerBudgetForm';
import reducerExpenseForm from '../components/ExpenseForm/reducerExpenseForm';

const initialState = {
  budget: '',
  expenses: [],
};

const rootReducer = combineReducers({
  budget: reducerBudgetForm,
  expenses: reducerExpenseForm,
});

const store = createStore(rootReducer, initialState, devToolsEnhancer());

export default store;
