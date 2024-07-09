export const handleCheckInputValue = (setNickname, setInputType) => (e) => {
  const inputValue = e.target.value;
  setNickname(inputValue);

  if (inputValue.length < 5) {
    setInputType("error");
  } else {
    setInputType("");
  }
};
