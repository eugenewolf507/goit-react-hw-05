import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], removeExpense }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => removeExpense(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

ExpensesTable.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
    }),
  ).isRequired,
  removeExpense: propTypes.func.isRequired,
};

export default ExpensesTable;
