import { useState } from 'react';
import TodoForm from "../TodoForm";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    console.log('submitUpdate');
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (

    <div
      className={todo.isComplete ? 'todo-row todo-row-completed' : 'todo-row'}
      key={index}>
      <div
        className='div-task'
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        <span
          className={todo.isComplete ? 'task complete' : 'task incomplete'}
        >{todo.text}</span>
        {todo.isComplete ?
          (<span className="badge completed-badge">Completed</span>)
          :
          (<span className="badge incompleted-badge">Incompleted</span>)
        }
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>

    </div>

  ))


}