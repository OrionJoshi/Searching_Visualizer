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

// insert random generated value
function insertRandomArray() {
  // making global variable
  randomArray = generateArray();
  randomSortedArray = [...randomArray];

  // sort random array for binary search
  randomSortedArray.sort((a, b) => a - b);

  if (searchType === "linear") {
    for (let i = 0; i < 10; i++) {
      let box = `box${i}`;
      document.getElementById(box).innerHTML = randomArray[i];
    }
  } else {
    for (let i = 0; i < 10; i++) {
      let box = `box${i}`;
      document.getElementById(box).innerHTML = randomSortedArray[i];
    }
  }
}

// disable the buttoms
function disable() {
  binarySearchBtn.setAttribute("disabled", true);
  linearSearchBtn.setAttribute("disabled", true);
  searchBtn.setAttribute("disabled", true);
  generateArrayBtn.setAttribute("disabled", true);
}
