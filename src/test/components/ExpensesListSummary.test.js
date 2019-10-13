import  React from 'react';
import { ExpensesListSummary } from '../../../src/components/ExpensesListSummary'
import { shallow } from 'enzyme';

let wrapper;
test('should display two expenses correctly ',()=>{
    wrapper = shallow(<ExpensesListSummary expensesCount={2} expensesTotal={9434}/>);
    expect(wrapper.find('h3').props().children).toBe("You are now viewing 2 expenses totaling ₪94.34");
});

test('should display two expenses correctly ',()=>{
    wrapper = shallow(<ExpensesListSummary expensesCount={1} expensesTotal={9434}/>);
    expect(wrapper.find('h3').props().children).toBe("You are now viewing 1 expense totaling ₪94.34");
});

