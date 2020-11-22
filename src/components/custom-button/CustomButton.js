import React from "react";

export default function CustomButton({ handleClick, children, className }) {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
