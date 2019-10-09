import React from 'react';
import { shallow } from 'enzyme';
import ExpensesDashBoard  from '../../components/ExpenseDashBoard';

test('should render correctly ' , () =>{
    const wrapper = shallow (<ExpensesDashBoard/>);
    expect(wrapper).toMatchSnapshot();
});