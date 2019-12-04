import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVisableExpenses } from '../selctors/expenses';
import getExpensesTotal from '../selctors/expenses-total'
export const ExpensesListSummary= ({expensesCount,expensesTotal})=>(
    <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">
            Viewing <span>{expensesCount}</span> {expensesCount==1 ? 'expense ' :'expenses '} totaling <span>{numeral(expensesTotal/100).format('$0,0.00').replace('$','₪')}</span>
        </h1>
        </div>
        <div className="page-header__actions">
            <Link className="button" to={'/create'}>
                Add Expense
            </Link>
        </div>
    </div>
        );

const mapStateToProps = (state)=> {
        const visibleExpenses = getVisableExpenses(state.expenses, state.filters);
        return{
            expensesCount:visibleExpenses.length, 
            expensesTotal: getExpensesTotal(visibleExpenses)
        };
};
export default connect(mapStateToProps)(ExpensesListSummary);


