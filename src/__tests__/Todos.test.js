import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import Todos from '../Todos';

const todos = new Map([
  ['foo', false],
  ['bar', true],
  ['baz', false],
  ['bim', true],
  ['bop', false],
  ['bap', true],
  ['boo', true],
]);

describe('<Todos/>', () => {
  describe('given a list of tasks', () => {
    describe('when displayed', () => {
      it('all tasks are shown', () => {
        const wrapper = shallow(<Todos todos={todos} />);
        expect(wrapper.find('Todo')).toHaveLength(todos.size);
      });
    });

    describe('when a user enters a new task', () => {
      it('adds the new task the displayed tasks', () => {
        const task =
          'do something very important, because I am an important person';
        const wrapper = shallow(<Todos todos={todos} />);

        wrapper.find('TodoInput').simulate('keyup', {
          key: 'Enter',
          target: {
            value: task,
          },
        });

        expect(wrapper.find('Todo')).toHaveLength(todos.size + 1);
      });
    });

    describe('when a user chooses to see only active tasks', () => {
      it('shows only active tasks', () => {
        const wrapper = shallow(<Todos todos={todos} />);

        wrapper
          .find('BottomNav')
          .props()
          .onChange('active');
        expect(wrapper.find('BottomNav').prop('selected')).toBe('active');
        expect(wrapper.find('Todo')).toHaveLength(3);
      });

      describe('and the user completes an active task', () => {
        it('removes the task from the current view', () => {
          const wrapper = shallow(<Todos todos={todos} />);

          wrapper
            .find('BottomNav')
            .props()
            .onChange('active');

          const activeTodo = wrapper.find('Todo').first();
          activeTodo.props().toggle(activeTodo.prop('todo'));

          expect(wrapper.find('Todo')).toHaveLength(2);
        });
      });
    });

    describe('when a user choose to see only completed tasks', () => {
      it('shows only completed tasks', () => {
        const wrapper = shallow(<Todos todos={todos} />);

        wrapper
          .find('BottomNav')
          .props()
          .onChange('done');

        expect(wrapper.find('BottomNav').prop('selected')).toBe('done');
        expect(wrapper.find('Todo')).toHaveLength(4);
      });

      describe('and the user toggles a completed task', () => {
        it('removes the task from the current view', () => {
          const wrapper = shallow(<Todos todos={todos} />);

          wrapper
            .find('BottomNav')
            .props()
            .onChange('done');

          const completedTodo = wrapper.find('Todo').first();
          completedTodo.props().toggle(completedTodo.prop('todo'));

          expect(wrapper.find('Todo')).toHaveLength(3);
        });
      });
    });

    describe('when a user chooses to remove a task', () => {
      it('removes the task', () => {
        const wrapper = shallow(<Todos todos={todos} />);

        const todo = wrapper.find('Todo').first();
        todo.props().onRemove(todo.prop('todo'));

        expect(wrapper.find('Todo')).toHaveLength(todos.size - 1);
      });
    });

    describe('when a user chooses to remove all tasks', () => {
      it('removes all the tasks', () => {
        const wrapper = shallow(<Todos todos={todos} />);

        wrapper.find('DeleteAll').simulate('click');

        expect(wrapper.find('Todos')).toHaveLength(0);
      });
    });
  });
});
