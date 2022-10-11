import React from "react";

export const IgnoreCaseToggle = (p) => {
  return (
    <>
      <label htmlFor="ignore-case">Ignore case?</label>
      <input
        type="checkbox"
        id="ignore-case"
        onChange={(e) => p.setToggle(e.target.checked)}
      />
    </>
  );
};
