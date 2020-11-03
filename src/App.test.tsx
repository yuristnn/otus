import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component test', () => {
    it('Should render App component', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});
