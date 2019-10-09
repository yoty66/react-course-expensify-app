import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from "../fixturs/filters";
import moment from 'moment';

let  sortByAmount,
    sortByDate,
    setFilterText,
    setStartDate ,
    setEndDate,
    wrapper;

beforeEach (() => {
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setFilterText = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(<ExpenseListFilter
        filters = {filters}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setFilterText = {setFilterText}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
    />);

});

test('should render ExpenseListFilter correctly ', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data correctly ', ()=>{
    wrapper.setProps({filters: altFilters});
    expect(wrapper).toMatchSnapshot();
});


test('should handle sort by amount  ', ()=>{
    wrapper.find('select').simulate('change', {target: {value:'amount'}});
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle sort by date  ', ()=>{
    wrapper.find('select').simulate('change', {target: {value:'date'}});
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle add text filter  ', ()=>{
    wrapper.find('input').simulate('change', {target: {value:'text filter'}});
    expect(setFilterText).toHaveBeenCalledWith('text filter');
});


test('should handle focus change', ()=>{
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
});

test('should handle date chsnge', ()=>{
    const startDate = moment(0).add(5, 'years');
    const endDate = moment(0).add(6, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate , endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


