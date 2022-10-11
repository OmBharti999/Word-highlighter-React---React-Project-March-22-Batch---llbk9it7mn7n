import React from "react";
import { useState } from "react";
import "../styles/App.css";
import { IgnoreCaseToggle } from "./IgnoreCaseToggle";
import { ParagraphInput } from "./ParagraphInput";
import { WordInput } from "./WordInput";
const App = () => {
  const [inputToHighLight, setInputTOHighLigh] = useState("");
  const [toogle, setToggle] = useState(false);
  // console.log(inputToHighLight);
  // console.log(" // console.log(inputToHighLight);", toogle);
  // console.log(inputToHighLight);
  return (
    <div id="main">
      <ParagraphInput search={inputToHighLight} toggle={toogle} />
      <WordInput setInputTOHighLigh={setInputTOHighLigh} />
      <br />
      <IgnoreCaseToggle setToggle={setToggle} />
    </div>
  );
};

export default App;
