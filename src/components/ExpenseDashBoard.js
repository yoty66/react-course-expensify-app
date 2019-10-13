import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter';
import ExpenseListSummary from './ExpensesListSummary';

export default   ()=> (
    <div>
        <ExpenseListSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);
