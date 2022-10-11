import React, { useState, useRef } from "react";

//  it was written before {pRef} in parameters
export const ParagraphInput = (p) => {
  const pRef = useRef();
  const [para, setPara] = useState("hii");
  function handleKeyPress() {
    console.log(pRef);
    // console.log(pRef.current.innerText);
  }
  handleKeyPress();

  //   function handleKeyPress(e) {
  //     console.log("You pressed a key.", e.key);
  //     setPara(e.key);
  //   }
  return (
    <>
      Enter paragraph here
      <div
        id="paragraph-input"
        contentEditable
        ref={pRef}
        // onKeyPress={(e) => handleKeyPress(e)}
      ></div>
    </>
  );
};
