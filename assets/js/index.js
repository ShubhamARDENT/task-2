// Functionality of the page should appear here
function getAscii(event) {
  // get the key pressed
  let key = event.key;

  //shows on character from a-z and numbers in input box
  if (key.length === 1) {
    document.getElementById("inputbox").value = key;
  }

  //check key length and show o/p on display
  if (key.length === 0) {
    document.getElementById("display").textContent =
      "key:  And the Ascii Value ";
  }

  if (key.length === 1) {
    const Char = /^[a-zA-Z0-9]$/;
    if (Char.test(key)) {
      let Value = key.charCodeAt(0);
      document.getElementById(
        "display"
      ).textContent = `Key:${key} and the Ascii Value: ${Value}`;
    } else {
      document.getElementById("display").textContent =
        "Error Invalid character";
    }
  }
}

// clear btn
function clearBtn() {
  document.getElementById("display").textContent =
    "key:  And the Ascii Value: ";
}
