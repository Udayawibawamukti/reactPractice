import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

let state: State = {
  result: 0
};

export default function setState(newState) {
  state.result = newState;
  console.log(newState);
  render();
  return state.result;
}

let body = document.body;

function render() {
  if (body) {
    ReactDOM.render(<App state={state} />, body);
  }
}

render();
