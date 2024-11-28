// Functionality of the page should appear here
function getAscii(event) {
  let key = event.key;

  // only one key at time
  if (key.length === 0) {
    document.getElementById("display").textContent =
      "key:  And the Ascii Value ";
  } else if (key.length === 1) {
    let Value = key.charCodeAt(0);
    document.getElementById(
      "display"
    ).textContent = `Key:${key} and the Ascii Value: ${Value}`;
  }
}

// clear btn
function clearBtn() {
  document.getElementById("display").textContent =
    "key:  And the Ascii Value: ";
}
