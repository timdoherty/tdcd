import React from 'react';
import { shallow } from 'enzyme';

import TodoStatus from '../TodoStatus';

describe('<TodoStatus/>', () => {
  describe('given a task', () => {
    describe('when then task is complete', () => {
      it('indicates that the task is complete', () => {
        const wrapper = shallow(<TodoStatus isComplete={true} />);
        expect(wrapper.prop('checked')).toBe(true);
      });
    });

    describe('when a user changes the task status', () => {
      it('responds to the change', () => {
        const onChangeMock = jest.fn();
        const wrapper = shallow(<TodoStatus onChange={onChangeMock} />);

        wrapper.simulate('change');

        expect(onChangeMock).toHaveBeenCalled();
      });
    });
  });
});
