import 'jsdom-global/register';
import React from 'react';
import Cell from './Cell';
import { mount, shallow } from 'enzyme';

describe('Cell component', () => {
    it('Should render Cell component', () => {
        const component = shallow(<Cell num={1} />);
        expect(component).toMatchSnapshot();
    });

    it('Checking cell children and onclick', () => {
        const wrapper = mount(
            <table>
                <tbody>
                    <tr>
                        <Cell num={12} />
                    </tr>
                </tbody>
            </table>
        );
        expect(wrapper.find('td')).toHaveLength(1);
        expect(wrapper.find('td').text()).toContain(' ');
        wrapper.find('td').first().simulate('click');
        expect(wrapper.find('td').text()).toContain(12);
    });
});
