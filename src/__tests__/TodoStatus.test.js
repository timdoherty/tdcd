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
      it('toggles the item status', () => {
        const todo = 'do the thing!';
        const todos = new Map([[todo, false]]);
        function toggle(todo) {
          todos.set(todo, !todos.get(todo));
        }

        const wrapper = shallow(<TodoStatus todo={todo} toggle={toggle} />);

        wrapper.simulate('change');

        expect(todos.get(todo)).toBe(true);
      });
    });
  });
});
