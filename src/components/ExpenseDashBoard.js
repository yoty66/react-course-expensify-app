import React from "react";
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilter'

export default   ()=> (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);
