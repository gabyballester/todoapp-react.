import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import { render,cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const form = document.createElement("form");
  ReactDOM.render(<TodoForm></TodoForm>, form)
})

it("renders input correctly", () => {
  const {getByTestId} = render(<TodoForm></TodoForm>)
  expect(getByTestId('input')).toHaveTextContent('');
})

it("matches snapshot", ()=>{
  const tree = renderer.create(<TodoForm></TodoForm>).toJSON();
  expect(tree).toMatchSnapshot();
})