// linear search function
function linearSearch(arr, value) {
  let counter = 0;
  const timer = setInterval(() => {
    let box = `box-wrapper-${counter}`;

    if (counter != 0) {
      // hiding arrow
      arrowIcons[counter - 1].style.display = "none";
    }

    if (counter == 10) {
      alert("Element Not Found");
      location.reload();
      clearInterval(timer);
    } else {
      // displaying arrow
      arrowIcons[counter].style.display = "block";
      var innerTimer = setTimeout(() => {
        document.getElementById(box).style.backgroundColor = failureColor;
      }, 500);
    }

    if (arr[counter] === value) {
      clearInterval(innerTimer);
      // displaying arrow
      arrowIcons[counter].style.display = "block";
      document.getElementById(box).style.backgroundColor = successColor;
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
  let previousMid = mid;
  let box = `box-wrapper-${mid}`;

  // displaying arrow and color
  arrowIcons[mid].style.display = "block";
  const timer = setTimeout(() => {
    document.getElementById(box).style.backgroundColor = failureColor;
  }, 500);

  // Compare mid with given key x
  if (arr[mid] === x) {
    document.getElementById(box).style.backgroundColor = successColor;
    clearInterval(timer);
    alert("Element Found At Index " + mid);
    location.reload();
    return true;
  }

  // If element at mid is greater than x,
  if (arr[mid] > x) {
    // search in the left half of mid
    setTimeout(() => {
      // hiding arrow
      arrowIcons[previousMid].style.display = "none";
      return binarySearch(arr, x, start, mid - 1);
    }, 1000);
  } else {
    // If element at mid is smaller than x,
    // search in the right half of mid
    setTimeout(() => {
      // hiding arrow
      arrowIcons[previousMid].style.display = "none";
      return binarySearch(arr, x, mid + 1, end);
    }, 1000);
  }
}
