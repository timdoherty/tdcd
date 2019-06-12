import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';
import TodoInput from './TodoInput';
import BottomNav from './BottomNav';

const DeleteAll = props => (
  <IconButton onClick={props.onClick}>
    <DeleteIcon />
  </IconButton>
);

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

  function removeTodo(todo) {
    let newTodos = new Map(todos);
    newTodos.delete(todo);
    setTodos(newTodos);
  }

  function removeAll() {
    setTodos(new Map());
  }

  function changeView(view) {
    setView(view);
  }

  return {
    todos: [...todos.entries()].filter(predicate),
    addTodo,
    toggleTodo,
    removeTodo,
    removeAll,
    view,
    changeView,
  };
}

function Todos(props) {
  const {
    todos,
    toggleTodo,
    addTodo,
    removeTodo,
    removeAll,
    view,
    changeView,
  } = useTodos(props);

  return (
    <Paper style={{ width: '85%', maxWidth: '800px', margin: 'auto' }}>
      <div
        style={{
          width: '95%',
          display: 'flex',
          margin: '10px auto',
          alignItems: 'center',
        }}
      >
        <TodoInput style={{ flex: '1' }} onChange={addTodo} />
        <DeleteAll onClick={removeAll} />
      </div>
      {todos.map(([todo, isComplete]) => (
        <Todo
          key={todo}
          todo={todo}
          isComplete={isComplete}
          onChange={toggleTodo}
          onRemove={removeTodo}
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
    </Paper>
  );
}

Todos.propTypes = {};

Todos.defaultProps = {};

export default Todos;
