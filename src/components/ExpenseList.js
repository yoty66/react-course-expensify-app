import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import {getVisableExpenses} from '../selctors/expenses';

export const ExpenseList = (props) =>
    (
      <div>
          <h1>Expense list</h1>
          {
              props.expenses.length === 0
                  ? (<p>there are no items</p>)
                  : (props.expenses.map((expense)=> <ExpenseListItem {...expense}/>))
          }
      </div>
    );

const mapStateToProps = (state)=> ({
    expenses: getVisableExpenses(state.expenses ,state.filters)
});

export default connect(mapStateToProps)(ExpenseList);

