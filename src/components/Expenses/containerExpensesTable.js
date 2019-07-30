import { connect } from 'react-redux';
import { removeExpense } from './actionExpenses';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => ({
  items: state.expenses,
});

const mapDispatchtToProps = dispatch => ({
  removeExpense: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchtToProps,
)(ExpensesTable);
