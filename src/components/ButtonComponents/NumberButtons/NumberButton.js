import React from "react";

export const NumberButton = ({ number, updater }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number-button" onClick={() => updater(number)}>
        {number}
      </button>
    </>
  );
};
