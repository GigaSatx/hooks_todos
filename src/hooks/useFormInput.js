import { useState } from "react";

function useFormInput(initialVal = "") {
  const [input, setInput] = useState(initialVal);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const resetInput = () => {
    setInput("");
  };
  return [input, handleInput, resetInput];
}
export default useFormInput;
