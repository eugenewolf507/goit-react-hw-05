import { connect } from 'react-redux';
import { addExpense } from './actionExpenses';
import ExpenseForm from './ExpenseForm';

const mapDispatchToProps = dispatch => ({
  addExpense: ({ name, amount }) => dispatch(addExpense({ name, amount })),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
