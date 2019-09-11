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
              updater(0);
              break;
            case "+/-":
              updater((Number(total) * -1).toString());
              break;
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
