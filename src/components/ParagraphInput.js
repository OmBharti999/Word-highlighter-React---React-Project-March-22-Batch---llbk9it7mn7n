import React from "react";

//  it was written before {pRef} in parameters
export const ParagraphInput = ({ pRef }) => {
  return (
    <>
      Enter paragraph here
      <div id="paragraph-input" contentEditable ref={pRef}></div>
    </>
  );
};
