// linear search function
function linearSearch(arr, value) {
  let counter = 0;
  const timer = setInterval(() => {
    let box = `box${counter}`;

    if (counter == 10) {
      alert("Element Not Found");
      location.reload();
      clearInterval(timer);
    } else {
      document.getElementById(box).style.backgroundColor = "red";
    }

    if (arr[counter] === value) {
      document.getElementById(box).style.backgroundColor = "green";
      alert("Element Found At Index " + counter);
      location.reload();
      clearInterval(timer);
    }
    counter++;
  }, 1000);
}

// binary search function
function binarySearch(arr, x, start, end) {
  if (start > end) {
    alert("Element not Found");
    location.reload();
    return false;
  }

  // Find the middle index
  let mid = Math.floor((start + end) / 2);
  let box = `box${mid}`;
  document.getElementById(box).style.backgroundColor = "red";

  // Compare mid with given key x
  if (arr[mid] === x) {
    document.getElementById(box).style.backgroundColor = "green";
    alert("Element Found At Index " + mid);
    location.reload();
    return true;
  }

  // If element at mid is greater than x,
  if (arr[mid] > x) {
    // search in the left half of mid
    setTimeout(() => {
      return binarySearch(arr, x, start, mid - 1);
    }, 1000);
  } else {
    // If element at mid is smaller than x,
    // search in the right half of mid
    setTimeout(() => {
      return binarySearch(arr, x, mid + 1, end);
    }, 1000);
  }
}
