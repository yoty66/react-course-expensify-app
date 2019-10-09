import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixturs/expenses';
import moment from 'moment';

test('should render expenseForm correctly ',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render expenseForm correctly with data ',()=>{
    const wrapper = shallow(<ExpenseForm {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change ', ()=> {
    const value = 'New description';
    const wrapper = shallow (<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
       target: {value}
    })
    expect(wrapper.state('description')).toBe(value);

});

test('should set note on textarea change', () => {
    const note = 'great expense!'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').at(0).simulate('change',{target: {value:note}});
    expect(wrapper.state('note')).toBe(note);
});


test('should set amount with valid input ', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{target: {value}});
    expect(wrapper.state('amount')).toBe(value);
});

test('shouldn\'t set amount with invalid input ', () => {
    const value = '23.5220';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{target: {value}});
    expect(wrapper.state('amount')).toBe('');
});

test('should call on submit for valid form submission ' , ()=> {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith({...expenses[0], id: undefined});

});

test('should set new state on date change', () =>{
    const now = moment();
    const wrapper =shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
} );

test('should set new state on focus change', () =>{
    const wrapper= shallow(<ExpenseForm/>);
    expect(wrapper.state('calendarFocused')).toBe(false);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});
    expect(wrapper.state('calendarFocused')).toBe(true);
});