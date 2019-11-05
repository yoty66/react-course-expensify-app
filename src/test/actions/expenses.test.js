import {
    addExpense,
    startAddExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses
} from "../../actions/expenses";
import expenses from '../../test/fixturs/expenses';
import database from '../../firebase/firebase';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

beforeEach(()=>{
    const expensesData={};
    expenses.forEach(({id, ...restProps})=>{
        expensesData[id] = {...restProps};
    });
    database.ref('expenses').set(expensesData).then(()=> done())
    }

);

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

    const action = addExpense(expenses[2]);
    expect(action).toEqual ({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    })
    }
    );

// test('should setup add expense action object with default ',
//     () => {
//     const defaultData = {
//         description : '',
//         note : '' ,
//         amount : 0 ,
//         createdAt : 0,
//     };
//     const action = addExpense();
//     expect(action).toEqual ({
//         type:'ADD_EXPENSE',
//         expense: {
//             ...defaultData,
//             id: expect.any(String)
//         }
//     })
//     }
//     );


test('should add expense to database and store',  (done)=> {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });


        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then(
        snapshot => {
            expect(snapshot.val()).toEqual(expenseData)
            done();
        }
    )
});



test('should add expense with defaults to database and store', (done)=>{
    const store = createMockStore({});
    const {id,...expenseData} = expenses[2];
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense :{
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then(
        snapshot => {expect(snapshot.val()).toEqual(expenseData)
            done();
        }
    )
});

test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses

    });
});

test('should fetch the expenses from firebase', (done)=>{
    const store =  createMockStore({});
    store.dispatch(startSetExpenses()).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses

        });
        done();
    });
});