import React from "react";

export const OperatorButton = ({ operator, op, number, updater }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className="operator-button"
        op={op}
        onClick={() => {
          if (op === "=") {
            updater(eval(number));
          } else {
            updater(number + operator);
          }
        }}
      >
        {op}
      </button>
    </>
  );
};
