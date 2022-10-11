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
