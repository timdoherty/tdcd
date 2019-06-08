import React from 'react';
import { shallow } from 'enzyme';

import Todo from '../Todo';

const props = {
  onChange() {},
  onRemove() {},
};

describe('<Todo/>', () => {
  describe('given a task', () => {
    describe('when displayed', () => {
      it('shows the name of the task', () => {
        const todo = 'do it!';

        const wrapper = shallow(<Todo {...props} todo={todo} />);

        expect(wrapper.findWhere(node => node.text() === todo).exists()).toBe(
          true
        );
      });

      it('shows the status of the task', () => {
        const wrapper = shallow(<Todo {...props} isComplete={true} />);

        expect(wrapper.find('TodoStatus').prop('isComplete')).toBe(true);
      });
    });

    describe('when a user completes a task', () => {
      it('changes the status of the task', () => {
        const todo = 'doing it!';
        const todos = new Map([[todo, false]]);
        function toggle(todo) {
          todos.set(todo, !todos.get(todo));
        }
        const wrapper = shallow(
          <Todo {...props} todo={todo} onChange={toggle} />
        );

        wrapper.find('TodoStatus').simulate('change');

        expect(todos.get(todo)).toBe(true);
      });
    });

    describe('when a user chooses to remove a task', () => {
      it('removes the task', () => {
        const todo = 'done it';
        const todos = new Map([[todo, true]]);
        function removeTodo(todo) {
          todos.delete(todo);
        }

        const wrapper = shallow(
          <Todo {...props} todo={todo} onRemove={removeTodo} />
        );

        wrapper.find('Delete').simulate('click');

        expect(todos.has(todo)).toBe(false);
      });
    });
  });
});
