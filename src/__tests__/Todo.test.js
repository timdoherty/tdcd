import React from 'react';
import { shallow } from 'enzyme';

import Todo from '../Todo';

describe('<Todo/>', () => {
  describe('given a thing to do', () => {
    describe('when displayed', () => {
      it('shows the name of the thing to do', () => {
        const todo = 'do it!';

        const wrapper = shallow(<Todo todo={todo} />);

        expect(wrapper.findWhere(node => node.text() === todo).exists()).toBe(
          true
        );
      });

      it('shows the status of the thing', () => {
        const wrapper = shallow(<Todo isComplete={true} />);

        expect(wrapper.find('TodoStatus').prop('isComplete')).toBe(true);
      });
    });

    describe('when a user toggles the status', () => {
      it('changes the status of the thing to do', () => {
        const todo = 'doing it!';
        const todos = new Map([[todo, false]]);
        function toggle(todo) {
          todos.set(todo, !todos.get(todo));
        }
        const wrapper = shallow(<Todo todo={todo} toggle={toggle} />);

        wrapper
          .find('TodoStatus')
          .props()
          .toggle();

        expect(todos.get(todo)).toBe(true);
      });
    });
  });
});
