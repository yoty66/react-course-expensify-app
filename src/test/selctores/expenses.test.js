import { getVisableExpenses } from '../../selctors/expenses';
import moment from 'moment';
import expenses from '../fixturs/expenses'

test('should filter by text value',()=>{
    const filters = {
        text: 'e' ,
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisableExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1]])
});


test('should filter by startDate', () => {
 const filters = {
     text: '' ,
     sortBy: 'date',
     startDate: moment(0),
     endDate: undefined,
 };

 const result = getVisableExpenses(expenses, filters);
 expect(result).toEqual([expenses[2], expenses[0]])
});


test ('should filter by endDAte', () => {
    const filters  = {
        text: '' ,
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = getVisableExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', ()=> {
    const filters  = {
        text: '' ,
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = getVisableExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0], expenses[1]]);
});

test('should sort by date', ()=> {
    const filters  = {
        text: '' ,
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = getVisableExpenses(expenses, filters);
    expect(result).toEqual([expenses[1],expenses[2], expenses[0]]);
});

