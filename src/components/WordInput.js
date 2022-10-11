import React, { useState } from "react";

export const WordInput = ({ pRef, toogle }) => {
  let [word, setWord] = useState("");
  const highlighter = (e) => {
    const typed = e.target.value;
    setWord(typed);
    if (!typed) {
      return;
    }
    if (toogle) {
      let resultWord = new RegExp(typed, "ig");
    }
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

// //////////////main work
function highlight() {
  let newParaElText = "";
  const paraEl = document.querySelector("#paragraph-input");
  const word = document.querySelector("#word-input");
  const ignoreCaseInput = document.querySelector("#ignore-case").checked;
  console.log(ignoreCaseInput);
  if (!word.value) return;
  if (ignoreCaseInput) {
    let resultWord = new RegExp(word.value, "ig");
    //  let resultWord = new RegExp(word.value);
    console.log(resultWord);
    newParaElText = paraEl.innerText.replaceAll(resultWord, (section) => {
      console.log(section);
      count++;
      return `<span class="highlighted-txt">${section}</span>`;
    });
  } else {
    newParaElText = paraEl.innerText.replaceAll(word.value, (section) => {
      console.log(section);
      count++;
      return `<span class="highlighted-txt">${section}</span>`;
    });
  }
  paraEl.innerHTML = newParaElText;
  wordCounterEl.innerText = count;
}
