import React from "react";

function Button({text, handlerFunction}) {
  return (
    <button
      onClick={handlerFunction}
      className="bg-secondary p-3 w-full rounded text-white"
    >
      {text}
    </button>
  );
}

export default Button;
