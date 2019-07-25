import { connect } from 'react-redux';
import * as actionBudgetForm from './actionBudgetForm';
import BudgetForm from './BudgetForm';

const mapStateToProps = state => ({
  budget: state.budget,
});

const mapDispatchToProps = dispatch => ({
  onSave: reducerBudgetForm =>
    dispatch(actionBudgetForm.addBudget(reducerBudgetForm)),
});

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(BudgetForm);
