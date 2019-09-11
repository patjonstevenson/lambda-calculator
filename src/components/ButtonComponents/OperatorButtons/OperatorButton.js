import React from "react";

export const OperatorButton = ({ operator, func, number, updater }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className="operator-button"
        op={func}
        //onClick={() => updater(func(number))}
      >
        {operator}
      </button>
    </>
  );
};
