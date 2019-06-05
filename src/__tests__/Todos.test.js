import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import Todos from '../Todos';

describe('<Todos/>', () => {
  let todos = new Map([['foo', false], ['bar', false], ['baz', true]]);

  describe('given a list of things to do', () => {
    describe('when the list is first displayed', () => {
      it('shows all todos regardless of status', () => {
        const wrapper = shallow(<Todos todos={todos} />);
        expect(wrapper.find('Todo')).toHaveLength(todos.size);
      });
    });

    describe('when only active items are selected', () => {
      it('shows only things that still need doing', () => {
        const wrapper = shallow(<Todos todos={todos} />);

        act(() => {
          wrapper
            .find('BottomNav')
            .props()
            .onChange('active');
        });
        wrapper.update();

        expect(wrapper.find('Todo')).toHaveLength(todos.size - 1);
      });

      describe('and an active item is toggled', () => {
        it('hides the item that was toggled', () => {
          const wrapper = shallow(<Todos defaultView="active" todos={todos} />);

          const fooTodo = wrapper.findWhere(
            node => node.prop('todo') === 'foo'
          );

          act(() => {
            fooTodo.props().toggle(fooTodo.prop('todo'));
          });
          wrapper.update();

          expect(
            wrapper.findWhere(node => node.prop('todo') === 'foo').exists()
          ).toBe(false);
        });
      });
    });

    describe('when only completed items are selected', () => {
      it('shows only things that are done', () => {
        const wrapper = shallow(<Todos todos={todos} />);

        act(() => {
          wrapper
            .find('BottomNav')
            .props()
            .onChange('done');
        });
        wrapper.update();

        expect(wrapper.find('Todo')).toHaveLength(todos.size - 2);
      });

      describe('and a completed item is toggled', () => {
        it('hides the item that was toggled', () => {
          const wrapper = shallow(<Todos defaultView="done" todos={todos} />);

          const bazTodo = wrapper.findWhere(
            node => node.prop('todo') === 'baz'
          );

          act(() => {
            bazTodo.props().toggle(bazTodo.prop('todo'));
          });
          wrapper.update();

          expect(
            wrapper.findWhere(node => node.prop('todo') === 'baz').exists()
          ).toBe(false);
        });
      });
    });

    describe('when a new todo is entered', () => {
      it('adds it to the list of things to do', () => {
        const todo = 'doin that thing you do';
        const wrapper = shallow(<Todos todos={todos} />);

        act(() => {
          wrapper
            .find('TodoInput')
            .props()
            .onKeyUp(todo);
        });
        wrapper.update();

        expect(
          wrapper.findWhere(node => node.prop('todo') === todo).exists()
        ).toBe(true);
      });
    });
  });
});
