import React, { useRef, useEffect } from "react";
import FancyInput from "./FancyInput";

export default function Test() {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    inputRef.current.focus();
    inputRef.current.fun();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <FancyInput ref={inputRef}></FancyInput>
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
