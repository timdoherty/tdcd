import React from 'react';
import { mount } from 'enzyme';

import Todos from '../Todos';

describe('<Todos/>', () => {
  beforeEach(() => {
    // setup each test here (or use before() for all)
  });

  afterEach(() => {
    // tear down each test here (or use after() for all)
  });

  let todos = new Map([['foo', false], ['bar', false], ['baz', true]]);

  describe('given a list of things to do', () => {
    describe('when the list is first displayed', () => {
      it('shows all todos regardless of status', () => {
        const wrapper = mount(<Todos todos={todos} />);
        expect(wrapper.find('Todo')).toHaveLength(todos.size);
      });
    });

    describe('when only active items are selected', () => {
      it('shows only things that still need doing', () => {
        const wrapper = mount(<Todos todos={todos} />);

        const activeNav = wrapper
          .find('BottomNav')
          .findWhere(node => node.prop('value') === 'active');

        activeNav.simulate('change', activeNav.prop('value'));

        expect(wrapper.find('Todo')).toHaveLength(todos.size - 1);
      });

      describe('and an active item is toggled', () => {
        it('hides the item that was toggled', () => {
          const wrapper = mount(<Todos defaultView="active" todos={todos} />);

          const statusIndicator = wrapper
            .findWhere(node => node.prop('todo') === 'foo')
            .find('TodoStatus');

          statusIndicator.simulate('change');

          expect(
            wrapper.findWhere(node => node.prop('todo') === 'foo').exists()
          ).toBe(false);
        });
      });
    });

    describe('when only completed items are selected', () => {
      it('shows only things that are done', () => {
        const wrapper = mount(<Todos todos={todos} />);

        const completedNav = wrapper
          .find('BottomNav')
          .findWhere(node => node.prop('value') === 'done');

        completedNav.simulate('change', completedNav.prop('value'));

        expect(wrapper.find('Todo')).toHaveLength(todos.size - 2);
      });

      describe('and a completed item is toggled', () => {
        it('hides the item that was toggled', () => {
          const wrapper = mount(<Todos defaultView="done" todos={todos} />);

          const statusIndicator = wrapper
            .findWhere(node => node.prop('todo') === 'baz')
            .find('TodoStatus');

          statusIndicator.simulate('change');

          expect(
            wrapper.findWhere(node => node.prop('todo') === 'baz').exists()
          ).toBe(false);
        });
      });
    });

    describe('when a new todo is entered', () => {
      it('adds it to the list of things to do', () => {
        const todo = 'doin that thing you do';
        const wrapper = mount(<Todos todos={todos} />);

        wrapper
          .find('TodoInput')
          .simulate('keyup', { key: 'Enter', target: { value: todo } });

        expect(
          wrapper.findWhere(node => node.prop('todo') === todo).exists()
        ).toBe(true);
      });
    });
  });
});
