import React from 'react';
import { shallow } from 'enzyme';
import  toJason from 'enzyme-to-json'
import Header from "../../components/Header";

test ('should render the header correctly ',()=>{
    const wrapper = shallow(<Header />) ;
    expect(toJason(wrapper)).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
// console.log(renderer.getRenderOutput())
});