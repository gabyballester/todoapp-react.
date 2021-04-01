import { useState } from 'react';

export default function TodoForm(props) {
  const [input, setInput] = useState('');
  
  const handleChange= e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random()*10000),
      text: input
    })

    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Añade una tarea"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Añadir tarea</button>
    </form>
  )
}
