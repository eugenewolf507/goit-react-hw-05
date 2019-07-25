import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducerBudgetForm from '../components/BudgetForm/reducerBudgetForm';

const rootReducer = combineReducers({
  reducerBudgetForm,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
