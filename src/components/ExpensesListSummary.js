import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { getVisableExpenses } from '../selctors/expenses';
import getExpensesTotal from '../selctors/expenses-total'
export const ExpensesListSummary= ({expensesCount,expensesTotal})=>(
        <h3>
            {`You are now viewing ${expensesCount} ${expensesCount==1 ? 'expense' :'expenses'} totaling ${numeral(expensesTotal/100).format('$0,0.00').replace('$','₪')}`}
        </h3> );

const mapStateToProps = (state)=> {
        const visibleExpenses = getVisableExpenses(state.expenses, state.filters);
        return{
            expensesCount:visibleExpenses.length, 
            expensesTotal: getExpensesTotal(visibleExpenses)
        };
};
export default connect(mapStateToProps)(ExpensesListSummary);


