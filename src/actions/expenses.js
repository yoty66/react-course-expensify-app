import database from '../firebase/firebase'
import expenses from '../test/fixturs/expenses'


//AddEXPENSE
export const addExpense = (
    expense)=> ({
    type: 'ADD_EXPENSE',
    expense });
//startAddExpense
export const startAddExpense = ( expenseData = {} ) => (dispatch, getState)=>{
    const uid = getState().auth.uid;
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
    return database.ref(`users/${uid}/expenses`).push(expense).then(

        (ref)=> {dispatch(addExpense({id:ref.key, ...expense}))
            console.log('got here');}
    )
};


//removeExpense
export const removeExpense = ({id})=>
    ({
        type:'REMOVE_EXPENSE',
        id
    });


//startRemoveExpense
export const startRemoveExpense = ({ id }) => (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
        dispatch(removeExpense({id}));
    });
};

//editExpense
export const editExpense = (id ,edit)=>
    ({
        type:'EDIT_EXPENSE',
        id,
        edit
    });

//startEditExpense

export const startEditExpense = (id, edit) =>( dispatch )=> {
return database.ref(`expenses/${id}`).update(edit).then(()=>{
    dispatch(editExpense(id,edit));
});
};

// SET_EXPENSES

export const setExpenses = ( expenses ) =>({
    type: 'SET_EXPENSES',
    expenses

});

// startSetExpenses;

export const startSetExpenses =()=>(dispatch, getState)=>{
    const uid= getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) =>{
        const expenses = [];
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })

        });

        dispatch(setExpenses(expenses))

    } );
};

