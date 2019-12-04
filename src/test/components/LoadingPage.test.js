import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../../src/components/LoadingPage';

test('LoadingPage should match snapshot',()=>{
    const wrapper = shallow(<LoadingPage/>)
    expect(wrapper).toMatchSnapshot();

})