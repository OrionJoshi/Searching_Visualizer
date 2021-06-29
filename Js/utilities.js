// generate random array
function generateArray() {
  let value;
  const resultArray = [];
  for (let i = 0; i < 10; i++) {
    value = Math.floor(Math.random() * 99);
    resultArray.push(value);
  }
  return resultArray;
}
