import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full"
        role="status"
      ></div>
    </div>
  );
}

export default Spinner;
