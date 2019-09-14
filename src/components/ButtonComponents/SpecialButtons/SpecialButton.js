import React from "react";

export const SpecialButton = ({ special, total, updater }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className="special-button"
        onClick={() => {
          switch (special) {
            case "C":
              updater("");
              break;
            case "+/-":
              updater((Number(total) * -1).toString());
              break;
            case "%":
              updater(total / 100); // had originally as * .01, but was leading to long decimal
            default:
              break;
          }
        }}
      >
        {special}
      </button>
    </>
  );
};
