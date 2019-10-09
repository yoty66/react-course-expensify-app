import filtersReducer from '../../reducers/filtersReducers';
import moment from 'moment';
test('should setup default filter values ',() =>{
    const state = filtersReducer(undefined , {type: '@@INIT'});

    expect(state).toEqual({
       text:'',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month'),
    });
});
test ('should set sortBy to amount', () =>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test ('should set sortBy to date', () =>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test ('should set text filter ', () => {
    const state = filtersReducer(undefined, {type: 'SET_FILTER_TEXT', text:'bla bla bla'});
    expect(state.text).toBe('bla bla bla')
});

test ('should set startDate filter ', () => {
    let date = moment(0);
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: date});
    expect(state.startDate).toBe(date);
});
test ('should set endDate filter ', () => {
    let date = moment(0);
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: date});
    expect(state.endDate).toBe(date);
});

