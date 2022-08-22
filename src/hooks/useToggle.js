import React, { useState } from "react";

export default function useToggle(initalVal = false) {
  const [state, setState] = useState(initalVal);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
}
