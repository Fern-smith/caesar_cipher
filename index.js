//To stored message.
let encryptedText = "";
const alphabet = "abcdefghijklmnopqrstuvwxyz";



// function to encrypt text
function encrypt() {
  const text = document.getElementById("text").value;
  const shiftValue = parseInt(document.getElementById("shiftValue").value);
  const caesarEncryptedText = caesarCipher(text, shiftValue);
  encryptedText = addRandomLetters(caesarEncryptedText);
  document.getElementById("output").textContent =
    `Encrypt code is: ${encryptedText}`;
}

// function to decrypt text
function decrypt() {
  const shiftValue = parseInt(document.getElementById("shiftValue").value);
  const text = document.getElementById("text").value;
  const cleanedText = removeRandomLetters(text);
  // Decryption is essentially encryption with negative shift value
  const decryptedText = caesarCipher(cleanedText, -shiftValue);
  document.getElementById("output").textContent =
    `Decrypt code is: ${decryptedText}`;
}

// Caesar Cipher function
function caesarCipher(text, shiftValue) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();
      const index = alphabet.indexOf(char);
      let newIndex = (index + shiftValue) % alphabet.length;
      if (newIndex < 0) {
        newIndex += alphabet.length; // Handle negative shift
      }
      let newChar = alphabet[newIndex];
      if (isUpperCase) {
        newChar = newChar.toUpperCase();
        // Preserve original case
      }
      result += newChar;
    } else {
      result += char;
      // Non-alphabetic characters remain unchanged.
    }
  }
  return result;
}

//Function to add random letters
function addRandomLetters(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    result += text[i];
    if ((i + 1) % 2 === 0) {
      const randomIdx = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIdx];
    }
  }
  return result;
}

//Function to remove random letters
function removeRandomLetters(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if ((i + 1) % 3 !== 0) {
      result += text[i];
    }
  }
  return result;
}
