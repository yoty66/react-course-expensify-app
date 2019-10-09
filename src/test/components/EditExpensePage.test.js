import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixturs/expenses';

let removeExpense , editExpense , history , wrapper ;

beforeEach(()=>{
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
    expense={expenses[1]}/>)
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle removeExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(removeExpense).toHaveBeenCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});



