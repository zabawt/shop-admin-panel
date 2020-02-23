import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../index';

describe('<App/> tests', ()=>{
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
})
