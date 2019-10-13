import selectExpensesTotal from '../../../src/selctors/expenses-total';
import expenses from '../fixturs/expenses';

test('should return 0 with no expenses', () =>{
    expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add  a single expense', () =>{
    expect(selectExpensesTotal([expenses[0]])).toBe(195);
});


test('should correctly add  several expenses', () =>{
    expect(selectExpensesTotal(expenses)).toBe(114195);
});