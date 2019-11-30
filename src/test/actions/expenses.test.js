import {
    addExpense,
    startAddExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from "../../actions/expenses";
import expenses from '../../test/fixturs/expenses';
import database from '../../firebase/firebase';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);
const uid='testuid';
const defaultAuth= {auth:{uid}};
beforeEach(()=>{
    const expensesData={};
    expenses.forEach(({id, ...restProps})=>{
        expensesData[id] = {...restProps};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=> done())
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
//
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
test('should edit expense ',( done )=>{
    const store= createMockStore();
    const {id1,...otherdata1} = expenses[1];
    const id = expenses[0].id;
    store.dispatch(startEditExpense(id, otherdata1)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            edit: otherdata1,
            id
        });

        return database.ref(`expenses/${id}`).once('value');

    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(otherdata1);
        done();
    });
});

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

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuth);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

//
//
test('should add expense with defaults to database and store', (done)=>{
    const store = createMockStore(defaultAuth);
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

    }).then(
        snapshot => {expect(snapshot.val()).toEqual(expenseData)
            done();
        }
    )
});
//
test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses

    });
});
//
test('should fetch the expenses from firebase', (done)=>{
    const store =  createMockStore(defaultAuth);
    store.dispatch(startSetExpenses()).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses

        });
        done();
    });
});
//
test('should remove the expenses from firebase', (done)=>{
    const store =  createMockStore(defaultAuth);
    const id =expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id

        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
             }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});