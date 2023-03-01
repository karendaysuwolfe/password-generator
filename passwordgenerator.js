function generatePassword(length) {
  // Ensure that the password length is at least 6 characters
  if (length < 6) {
    length = 6;
  }
  // Get all the printable ASCII characters
  const characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  // Use the Math.random() function to generate a password
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  // Ensure that the password has at least one uppercase letter and one lowercase letter
  if (!password.match(/[a-z]/)) {
    password = password.replace(/[a-z]/, String.fromCharCode(Math.floor(Math.random() * 26) + 97));
  }
  if (!password.match(/[A-Z]/)) {
    password = password.replace(/[A-Z]/, String.fromCharCode(Math.floor(Math.random() * 26) + 65));
  }
  // Ensure that the password has at least one special character
  if (!password.match(/[!#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~]/)) {
    password = password.replace(/[!#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~]/, '!');
  }
  return password;
}

function generateAndDisplayPassword() {
  const passwordLengthInput = document.getElementById('password-length');
  const passwordTextArea = document.getElementById('password');

  // Get the password length from the input element
  const length = parseInt(passwordLengthInput.value);

  // Generate a password using the generatePassword function
  const password = generatePassword(length);

  // Display the password in the text area
  passwordTextArea.value = password;
}
