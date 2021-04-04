import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';

it("renders without crashing", ()=>{
  const form = document.createElement("form");
  ReactDOM.render(<TodoForm></TodoForm>, form)
})