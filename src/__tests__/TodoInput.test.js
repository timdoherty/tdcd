import React from 'react';
import { mount, shallow } from 'enzyme';

import TodoInput from '../TodoInput';

describe('<TodoInput/>', () => {
  describe('given a place to enter a new task', () => {
    describe('when a user presses enter', () => {
      describe('and the task name is not empty', () => {
        it('responds with the new task name', () => {
          const todo = 'you do it too';
          const onKeyUpMock = jest.fn();
          const wrapper = mount(<TodoInput onKeyUp={onKeyUpMock} />);

          wrapper.simulate('keyup', { key: 'Enter', target: { value: todo } });

          expect(onKeyUpMock).toHaveBeenCalledWith(todo);
        });
      });

      describe('and the task name is empty', () => {
        it('does not respond', () => {
          const onKeyUpMock = jest.fn();
          const wrapper = shallow(<TodoInput onKeyUp={onKeyUpMock} />);

          wrapper.simulate('keyup', { key: 'Enter', target: { value: '' } });

          expect(onKeyUpMock).not.toHaveBeenCalled();
        });
      });
    });
  });
});
