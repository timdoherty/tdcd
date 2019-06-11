import React from 'react';
import { shallow } from 'enzyme';

import TodoInput from '../TodoInput';

describe('<TodoInput/>', () => {
  describe('given a place to enter a new task', () => {
    describe('when a user presses enter', () => {
      describe('and the task name is not empty', () => {
        it('responds with the new task name and clears the new task name', () => {
          const todo = 'you do it too';
          const onChangeMock = jest.fn();
          const wrapper = shallow(<TodoInput onChange={onChangeMock} />);

          wrapper.simulate('change', { target: { value: todo } });
          wrapper.simulate('keyup', { key: 'Enter' });

          expect(onChangeMock).toHaveBeenCalledWith(todo);
          expect(wrapper.prop('value')).toBe('');
        });
      });

      describe('and the task name is empty', () => {
        it('does not respond', () => {
          const onChangeMock = jest.fn();
          const wrapper = shallow(<TodoInput onChange={onChangeMock} />);

          wrapper.simulate('keyup', { key: 'Enter', target: { value: '' } });

          expect(onChangeMock).not.toHaveBeenCalled();
        });
      });
    });
  });
});
