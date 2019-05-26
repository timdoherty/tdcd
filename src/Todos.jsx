import React, { useState } from 'react';

import Todo from './Todo';
import TodoInput from './TodoInput';
import BottomNav from './BottomNav';

const navOptions = ['All', 'Active', 'Done'];

function Todos(props) {
  const [todos, setTodos] = useState(props.todos);
  const [view, setView] = useState(props.defaultView || 'all');

  const currentTodos = new Map(
    [...todos.entries()].filter(([todo, isComplete]) => {
      switch (view) {
        case 'active':
          return !isComplete;
        case 'done':
          return isComplete;
        default:
          return true;
      }
    })
  );

  function onKeyUp(value) {
    let newTodos = new Map(todos);
    newTodos.set(value, false);
    setTodos(newTodos);
  }

  function onToggle(todo) {
    let newTodos = new Map(todos);
    newTodos.set(todo, !newTodos.get(todo));
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoInput onKeyUp={onKeyUp} />
      {[...currentTodos.entries()].map(([todo, isComplete]) => (
        <Todo
          key={todo}
          todo={todo}
          isComplete={isComplete}
          toggle={onToggle}
        />
      ))}
      <BottomNav
        onChange={newView => {
          setView(newView);
        }}
        options={navOptions.map(option => ({
          label: option,
          value: option.toLowerCase(),
        }))}
        selected={view}
      />
    </div>
  );
}

export default Todos;
