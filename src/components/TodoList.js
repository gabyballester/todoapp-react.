import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    console.log('addTodo');
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [...todos, todo]

    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    console.log('updateTodo');
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos(prev =>
      prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = id => {
    console.log('removeTodo');
    const removeArray = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArray);
  }

  const completeTodo = id => {
    console.log('completeTodo');
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}