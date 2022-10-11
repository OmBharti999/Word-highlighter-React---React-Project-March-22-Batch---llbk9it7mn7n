import React, { useState } from "react";

export const WordInput = (p) => {
  let [i, si] = useState("");
  const ci = (e) => {
    si(e.target.value);
    p.setInputTOHighLigh(i);
  };
  return (
    <>
      <label htmlFor="word-input">Enter word to be highlighted here</label>
      <input id="word-input" type={"text"} value={i} onChange={ci} />
    </>
  );
};

// //////////////main work
function highlight() {
  let newParaElText = "";
  let count = 0;
  const paraEl = document.querySelector("#paragraph-input");
  const word = document.querySelector("#word-input");
  const wordCounterEl = document.querySelector("#words-counter");
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
