import React from "react";
import Calculator from "./Components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>
          <a
            href="https://www.freepik.com/icons/calculator"
            target="_blank"
            className="source-image"
            rel="noreferrer"
          >
            Icon by srip
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
