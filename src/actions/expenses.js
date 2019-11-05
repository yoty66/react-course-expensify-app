import uuid from "uuid";
import database from '../firebase/firebase'
//AddEXPENSE
export const addExpense = (
    expense)=> ({
    type: 'ADD_EXPENSE',
    expense });

export const startAddExpense = ( expenseData = {} ) => (dispatch)=>{
    const {
        description = '',
        note = '' ,
        amount = 0 ,
        createdAt = 0,
         }=expenseData;
        const expense = {
            description ,
            note ,
            amount ,
            createdAt ,
        };
    return database.ref('expenses').push(expense).then(
        (ref)=> dispatch(addExpense({id:ref.key, ...expense}))
    )
};

export const removeExpense = ({id})=>
    ({
        type:'REMOVE_EXPENSE',
        id
    });

//editExpense
export const editExpense = (id ,edit)=>
    ({
        type:'EDIT_EXPENSE',
        id,
        edit
    });

// SET_EXPENSES

export const setExpenses = ( expenses ) =>({
    type: 'SET_EXPENSES',
    expenses

});

// export const startSetExpenses;

export const startSetExpenses =()=>(dispatch)=>{
    return database.ref('expenses').once('value').then((snapshot) =>{
        const expenses = [];
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });

        });

        dispatch(setExpenses(expenses))

    } );
};

