import React from 'react';
import { shallow } from 'enzyme';

import TodoInput from '../TodoInput';

describe('<TodoInput/>', () => {
  describe('given a place to enter a new todo', () => {
    describe('when a user presses enter', () => {
      describe('and the input is not empty', () => {
        it('responds with the new todo name', () => {
          const todo = 'you do it too';
          const onKeyUpMock = jest.fn();
          const wrapper = shallow(<TodoInput onKeyUp={onKeyUpMock} />);

          wrapper.simulate('keyup', { key: 'Enter', target: { value: todo } });

          expect(onKeyUpMock).toHaveBeenCalledWith(todo);
        });
      });

      describe('and the input is empty', () => {
        it('does not respond', () => {
          const todo = 'you do it too';
          const onKeyUpMock = jest.fn();
          const wrapper = shallow(<TodoInput onKeyUp={onKeyUpMock} />);

          wrapper.simulate('keyup', { key: 'Enter', target: { value: '' } });

          expect(onKeyUpMock).not.toHaveBeenCalled();
        });
      });
    });
  });
});
