import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducerBudgetForm from '../components/BudgetForm/reducerBudgetForm';
import reducerExpenses from '../components/Expenses/reducerExpenses';

const initialState = {
  budget: 0,
  expenses: [],
};

const rootReducer = combineReducers({
  budget: reducerBudgetForm,
  expenses: reducerExpenses,
});

const store = createStore(rootReducer, initialState, devToolsEnhancer());

export default store;
