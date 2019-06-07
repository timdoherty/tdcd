import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import TodoInput from './TodoInput';
import BottomNav from './BottomNav';

const views = ['All', 'Active', 'Done'];

function useTodos(props) {
  const [todos, setTodos] = useState(props.todos || new Map());
  const [view, setView] = useState('all');
  const predicates = {
    active: ([task, isComplete]) => !isComplete,
    done: ([task, isComplete]) => isComplete,
  };
  const predicate = predicates[view] || (() => true);

  function toggleTodo(todo) {
    let newTodos = new Map(todos);
    newTodos.set(todo, !newTodos.get(todo));
    setTodos(newTodos);
  }

  function addTodo(todo) {
    let newTodos = new Map(todos);
    newTodos.set(todo, false);
    setTodos(newTodos);
  }

  function changeView(view) {
    setView(view);
  }

  return {
    todos: [...todos.entries()].filter(predicate),
    addTodo,
    toggleTodo,
    view,
    changeView,
  };
}

function Todos(props) {
  const { todos, toggleTodo, addTodo, view, changeView } = useTodos(props);

  return (
    <div>
      <TodoInput onKeyUp={addTodo} />
      {todos.map(([todo, isComplete]) => (
        <Todo
          key={todo}
          todo={todo}
          isComplete={isComplete}
          toggle={toggleTodo}
        />
      ))}
      <BottomNav
        selected={view}
        options={views.map(view => ({
          value: view.toLowerCase(),
          label: view,
        }))}
        onChange={changeView}
      />
    </div>
  );
}

Todos.propTypes = {};

Todos.defaultProps = {};

export default Todos;
