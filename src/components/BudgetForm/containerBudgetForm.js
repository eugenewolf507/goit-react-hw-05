import { connect } from 'react-redux';
import { addBudget } from './actionBudgetForm';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = dispatch => ({
  addBudget: budget => dispatch(addBudget(budget)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
