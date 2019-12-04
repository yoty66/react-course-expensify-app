import  React from 'react';
import { ExpensesListSummary } from '../../../src/components/ExpensesListSummary'
import { shallow } from 'enzyme';

let wrapper;
test('should display two expenses correctly ',()=>{
    wrapper = shallow(<ExpensesListSummary expensesCount={2} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should display two expenses correctly ',()=>{
    wrapper = shallow(<ExpensesListSummary expensesCount={1} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});

