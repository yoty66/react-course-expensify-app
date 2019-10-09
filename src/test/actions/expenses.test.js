import { addExpense , editExpense, removeExpense} from "../../actions/expenses";


test('should setup remove expense action object',
    () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
    });

test('should setup edit expense action object',
    () => {
    const action = editExpense('123', {description: 'Bla Bla Bla '});
    expect(action).toEqual ({
        type:'EDIT_EXPENSE',
        id:'123',
        edit: {description: 'Bla Bla Bla '}
    })
    }
    );
test('should setup add expense action object with provided values ',
    () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent '
    };
    const action = addExpense(expenseData);
    expect(action).toEqual ({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
    }
    );

test('should setup add expense action object with provided values ',
    () => {
    const defaultData = {
        description : '',
        note : '' ,
        amount : 0 ,
        createdAt : 0,
    };
    const action = addExpense();
    expect(action).toEqual ({
        type:'ADD_EXPENSE',
        expense: {
            ...defaultData,
            id: expect.any(String)
        }
    })
    }
    );

