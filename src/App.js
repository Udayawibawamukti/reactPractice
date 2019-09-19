import React from "react";
import setState from "./main";

function App() {
  let gen = fibNumber();
  let x = 0;
  return (
    <div>
      <h1>Udayawibawamukti</h1>
      <button
        onClick={() => {
          x = gen.next().value;
          console.log(x);
        }}
      >
        Press Me!
      </button>
      <h1>{x}</h1>
    </div>
  );
}

function* fibNumber() {
  let firstNumb = 0;
  let secondNumb = 1;
  let nextNumb = 0;
  yield firstNumb;
  while (true) {
    nextNumb = firstNumb + secondNumb;
    firstNumb = secondNumb;
    secondNumb = nextNumb;
    yield firstNumb;
  }
}

export default App;
