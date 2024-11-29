// Functionality of the page should appear here

const inputBox = document.getElementById("inputbox");
const output = document.getElementById("output");
const box = document.querySelector(".value-container").classList;
const error = document.querySelector(".error-message");
const errorBox = document.querySelector(".error-message").classList;

inputBox.addEventListener("keydown", getAscii);

function getAscii(event) {
  // get the key pressed
  let key = event.key;

  //shows on character from a-z and numbers in input box
  if (key.length === 1) {
    event.target.value = key;
  }

  //check key length and show o/p on display
  if (key.length === 0) {
    output.textContent = "key: N/A  And the Ascii Value: N/A ";
  }

  if (key.length === 1) {
    const Char = /^[a-zA-Z0-9]/;
    //check for character or number
    if (Char.test(key)) {
      let Value = key.charCodeAt(0);
      output.textContent = `Key:${key} and the Ascii Value: ${Value}`;
      box.remove("box");
      // remove error msg
      error.textContent = null;
    } else {
      output.textContent = "key: N/A  And the Ascii Value: N/A ";
      box.add("box");
      // show error msg
      error.textContent = "Please Enter a Alphabet Or Number Only";
      // blinking effect
      errorBox.add("error-box");
    }
  }
}

document.querySelector(".clear-btn", clearBtn);
// clear btn
function clearBtn() {
  document.getElementById("display").textContent =
    "key:  And the Ascii Value: ";
}
