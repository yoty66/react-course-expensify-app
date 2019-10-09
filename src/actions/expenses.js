import uuid from "uuid";

//AddEXPENSE
export const addExpense = (
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


