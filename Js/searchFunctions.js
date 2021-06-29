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
