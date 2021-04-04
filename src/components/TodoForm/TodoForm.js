import { useState, useEffect, useRef } from 'react';

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value
    : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('')
  }


  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        data-testid="input"
        type="text"
        placeholder={props.edit ? "Edita la tarea" : "Añade la tarea"}
        value={input}
        name="text"
        className={props.edit ? "todo-input todo-input-edit" : "todo-input"}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">{props.edit ? "Editar" : "Añadir"}</button>
    </form>
  )
}
