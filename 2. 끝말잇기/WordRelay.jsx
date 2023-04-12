import React, { useRef, useState } from "react";

const WordRelay = () => {
  const [word, setWord] = useState("서수민");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("정답");
      inputEl.current.focus();
    } else {
      setValue("");
      setResult("땡");
      inputEl.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputEl} value={value} onChange={onChange} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
