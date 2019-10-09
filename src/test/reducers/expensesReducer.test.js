import expensesReducer from '../../reducers/expensesReducers';
import expenses from '../fixturs/expenses'

test ('should set default state ', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test ('should remove expense by id', () => {
    const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id :expenses[0].id});
    expect(state).toEqual([expenses[1],expenses[2]]);
});

test ('should not remove anything when it gets a non existing id', () => {
    const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id :'-5'});
    expect(state).toEqual(expenses);
});

test ('should add expense ', () => {
    const state = expensesReducer([expenses[0],expenses[1]], {type:'ADD_EXPENSE', expense :expenses[2]});
    expect(state).toEqual(expenses);
});

test ('should edit expense  ', () => {
    const expensesAfterEdit = [expenses[2],expenses[1], expenses[2]];
    const state = expensesReducer(expenses, {type:'EDIT_EXPENSE',id: expenses[0].id, edit: {...expenses[2]}});
    expect(state).toEqual(expensesAfterEdit);
});

test ('should not edit expense if id doesn\'t exists' , () => {
    const state = expensesReducer(expenses, {type:'EDIT_EXPENSE',id: -2, edit: {...expenses[2]}});
    expect(state).toEqual(expenses);
});

