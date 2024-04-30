const handleLargeOperation = () => {
  let value = 0;
  for (let i = 0; i <= 1e8 * 30; i++) {
    value += i;
  }
  return value;
};

onmessage = (event) => {
  if (event.data === "operation") {
    const value = handleLargeOperation();
    postMessage(value);
  }
};
