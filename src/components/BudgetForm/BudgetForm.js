import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export class BudgetForm extends Component {
  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);

    this.setState({ budget: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
            placeholder={0}
            name="budget"
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget,
});

const mapDispatchToProps = dispatch => ({
  onSave: reducerBudgetForm =>
    dispatch(actionBudgetForm.addBudget(reducerBudgetForm)),
});

connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(BudgetForm);

export const Type = {
  ADD_BUDGET: 'ADD_BUDGET',
};

export const addBudget = () => ({
  type: Type.ADD_BUDGET,
  payload: 2,
});

const InitialState = 5;

export const reducerBudgetForm = (state = InitialState, { type, payload }) => {
  switch (type) {
    case Type.ADD_BUDGET: {
      console.log('hhhhhhh');
      return state + payload;
    }

    default:
      return state;
  }
};
