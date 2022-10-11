import React from "react";
import { useState, useRef } from "react";
import "../styles/App.css";
import { IgnoreCaseToggle } from "./IgnoreCaseToggle";
import { ParagraphInput } from "./ParagraphInput";
import { WordInput } from "./WordInput";
const App = () => {
  const [toogle, setToggle] = useState(false);
  // para ref
  const pRef = useRef();
  return (
    <div id="main">
      <ParagraphInput pRef={pRef} />
      <WordInput pRef={pRef} toogle={toogle} />
      <br />
      <IgnoreCaseToggle setToggle={setToggle} />
    </div>
  );
};

export default App;
