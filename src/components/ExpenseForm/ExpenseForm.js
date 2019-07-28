import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { addExpense } from './actionExpenseForm';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addExpense({
      ...this.state,
    });

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: ({ name, amount }) => dispatch(addExpense({ name, amount })),
});

ExpenseForm.propTypes = {
  addExpense: propTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
