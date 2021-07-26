import React, { useRef, useImperativeHandle, forwardRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    fun: () => {
      console.log("子组件的方法");
    },
  }));
  return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);

export default FancyInput;
