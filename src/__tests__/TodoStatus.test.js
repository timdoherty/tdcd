import React from 'react';
import { shallow } from 'enzyme';

import TodoStatus from '../TodoStatus';

describe('<TodoStatus/>', () => {
  describe('given a todo', () => {
    describe('when it has been marked complete', () => {
      it('indicates that it is complete', () => {
        const wrapper = shallow(<TodoStatus isComplete={true} />);
        expect(wrapper.prop('checked')).toBe(true);
      });
    });

    describe('when a user clicks its status', () => {
      it('responds to the click', () => {
        const toggleMock = jest.fn();
        const wrapper = shallow(<TodoStatus toggle={toggleMock} />);

        wrapper.simulate('change');

        expect(toggleMock).toHaveBeenCalled();
      });
    });
  });
});
