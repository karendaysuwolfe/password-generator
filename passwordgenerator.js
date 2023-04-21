function generatePassword() {
  const passwordLengthInput = document.getElementById("password-length");
  const length = passwordLengthInput.value;

  if (length < 6) {
    alert("Password length must be at least 6 characters!");
    return;
  }

  let characters = "";

  const uppercaseCheckbox = document.getElementById("uppercase");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const numbersCheckbox = document.getElementById("numbers");
  const specialCharactersCheckbox = document.getElementById("special-characters");

  if (uppercaseCheckbox.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercaseCheckbox.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbersCheckbox.checked) {
    characters += "0123456789";
  }
  if (specialCharactersCheckbox.checked) {
    characters += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  if (characters.length === 0) {
    alert("Please select at least one character set!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  const passwordDisplay = document.getElementById("password");
  passwordDisplay.textContent = password;
}
