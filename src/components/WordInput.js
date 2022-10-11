import React, { useState } from "react";

import "../styles/App.css";

export const WordInput = ({ pRef, toogle }) => {
  let [word, setWord] = useState("");

  const highlighter = (e) => {
    e.preventDefault();
    const typed = e.target.value;
    setWord(typed);
    const paraEl = pRef.current.innerText;
    let newParaElText = "";
    // console.log("hiii", paraEl, toogle);
    // togel and inner text coming
    if (toogle) {
      let resultWord = new RegExp(typed, "ig");
      console.log("result");

      console.log("result", resultWord);
      newParaElText = paraEl.replaceAll(resultWord, (section) => {
        console.log("section", section);
        return `<span class="highlighted-txt">${section}</span>`;
      });
    } else {
      newParaElText = paraEl.replaceAll(typed, (section) => {
        console.log(section);
        return `<span class="highlighted-txt">${section}</span>`;
      });
    }
    pRef.current.innerHTML = newParaElText;
  };

  return (
    <>
      <label htmlFor="word-input">Enter word to be highlighted here</label>
      <input
        id="word-input"
        type={"text"}
        value={word}
        onChange={highlighter}
      />
    </>
  );
};
