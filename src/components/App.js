import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
// import shortid from 'shortid';
import BudgetForm from './BudgetForm/BudgetForm';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpensesTable from './ExpenseForm/ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {

  removeExpense = id => {
    this.setState(state => ({
      expenses: state.expenses.filter(expense => expense.id !== id),
    }));
  };

  render() {
    const { expenses } = this.props;

    return (
      <Container>
        <BudgetForm />
        <Values />
        <ExpenseForm />
                {expenses.length > 0 && (
          <ExpensesTable items={expenses} onRemove={this.removeExpense} />
        )}
              </Container>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

App.propTypes = {
  expenses: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(App);
