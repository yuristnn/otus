import 'jsdom-global/register';
import React from 'react';
import Rows from './Rows';
import { mount, shallow } from 'enzyme';

describe('Rows component', () => {
    it('Should render Rows component', () => {
        const component = shallow(<Rows rows={3} cells={3} />);
        expect(component).toMatchSnapshot();
    });

    it('Checking rows and cells', () => {
        const wrapper = mount(
            <table>
                <tbody>
                    <Rows rows={3} cells={3} />
                </tbody>
            </table>
        );
        expect(wrapper.find('tr')).toHaveLength(3);
        expect(wrapper.find('td')).toHaveLength(9);
    });
});
