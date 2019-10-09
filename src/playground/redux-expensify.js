import {createStore , combineReducers }  from 'redux';
import uuid from 'uuid';;



//AddEXPENSE

const addExpense = (
    {
        description = '',
        note = '' ,
        amount = 0 ,
        createdAt = 0,
    }={})=> ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});


//removeExpense

const removeExpense = ({id})=>
    ({
        type:'REMOVE_EXPENSE',
        id
        });

//editExpense

const editExpense = ({id,edit})=>
    ({
        type:'EDIT_EXPENSE',
        id,
        edit
        });




//expensesReducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState , action )=> {
    switch (action.type)
    {
        case 'ADD_EXPENSE':
            return [...state , action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(( expense )=> expense.id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map(( expense )=> expense.id === action.id ?{...expense, ...action.edit} :
                expense);
        default:
            return state;
    }
};

/// filter

//setTextFilter

const setTextFilter = (text)=>
    ({
        type:'SET_FILTER_TEXT',
        text
    });

//sortByAmount

const sortByAmount = ()=>
    ({
        type:'SORT_BY_AMOUNT',
    });

//sortByDate

const sortByDAte = ()=>
    ({
        type:'SORT_BY_DATE',
    });
//setStartDate

const setStartDate = (date)=>
    ({
        type:'SET_START_DATE',
        date
    });
//setEndDate

const setEndDate = (date)=>
    ({
        type:'SET_END_DATE',
        date
    });



const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',  //date or amount
    startDate: undefined,
    endDate: undefined,
};
//filtersReducer
const filtersReducer = (state = filtersReducerDefaultState , action )=> {
    switch (action.type)
    {
        case 'SET_FILTER_TEXT' :
            return {...state , text: action.text};
        case 'SORT_BY_DATE' :
            return {...state , sortBy: 'date'};
        case 'SORT_BY_AMOUNT' :
            return {...state , sortBy: 'amount'};
        case 'SET_START_DATE' :
            return {...state , startDate: action.date };
        case 'SET_END_DATE' :
            return { ...state, endDate: action.date} ;
        default:
            return state;
    }
};

const getVisableExpenses= ( expenses ,{startDate, endDate ,sortBy ,text } ) => {
    return expenses.filter (
        (expense) => {
            const startDateMatch =  typeof startDate != 'number' || startDate <= expense.createdAt ;
            const endDateMatch =  typeof endDate != 'number' || endDate >= expense.createdAt ;
            const textMatch=expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());
            return startDateMatch && endDateMatch && textMatch;
    }
    ).sort(
        (a,b) => {
            if (sortBy === 'date')
                return a.createdAt < b.createdAt ? 1: -1;
            else if (sortBy === 'amount' )
                return a.amount < b.amount ? 1 : -1 ;
} );
};

const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters: filtersReducer
    }
));

store.subscribe(()=>{

const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses , state.filters, ...state);
console.log(visableExpenses);
})

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(100));
store.dispatch(setTextFilter('rent'));
let expenseOne = store.dispatch(addExpense({description: 'Rent' , amount: 190000,createdAt: 0 }));
const expenseTwo = store.dispatch(addExpense({description: 'Cofee' , amount: 300 , createdAt: 101}));

store.dispatch(editExpense({id: expenseTwo.expense.id, edit: {description: 'rensrent',  amount: 500}}));
// store.dispatch(setTextFilter('feeling lucky'));
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDAte());

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());







const demoState ={
  expenses: [
      {
          id: 'pojenees',
          description: 'January Rent',
          note: 'it\'s the best ',
          amount: 190000,
          createdAt:0
      }],

    filters: {
      text: 'rent',
        sortBy: 'amount',  //date or amount
        startDate: undefined,
        endDate: undefined,
    }
};
