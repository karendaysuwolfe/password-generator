function generatePassword() {
  const passwordLengthInput = document.getElementById('password-length');
  const length = passwordLengthInput.value;
  
  // Ensure that the password length is at least 6 characters
  if (length < 6) {
    alert('Password length must be at least 6 characters!');
    return;
  }
  
  // Get all the printable ASCII characters
  let characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  
  // Get the selected options
  const optionCheckboxes = document.getElementsByClassName('option');
  const easyToReadCheckbox = optionCheckboxes[0];
  const easyToSayCheckbox = optionCheckboxes[1];
  const allCharactersCheckbox = optionCheckboxes[2];
  
  // Determine which options are selected
  let easyToRead = easyToReadCheckbox.checked;
  let easyToSay = easyToSayCheckbox.checked;
  let allCharacters = allCharactersCheckbox.checked;
  
  // Apply the selected options to the character set
  if (easyToRead) {
    characters = characters.replace(/[ilo]/gi, '');
  }
  if (easyToSay) {
    characters = characters.replace(/[0123456789!#$%&'()*+,-.:;<=>?@[\\\]^_`{|}~]/g, '');
  }
  if (!allCharacters) {
    characters = characters.replace(/[^A-Za-z0-9]/g, '');
  }
  
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
  
  // Display the password on the page
  const passwordDisplay = document.getElementById('password');
  passwordDisplay.textContent = password;
}

function copyToClipboard() {
  const passwordDisplay = document.getElementById('password');
  passwordDisplay.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

function updateCheckboxes(checkbox) {
  const optionCheckboxes = document.getElementsByClassName('option');
  for (let i = 0; i < optionCheckboxes.length; i++) {
    if (optionCheckboxes[i] !== checkbox) {
      optionCheckboxes[i].checked = false;
    }
  }
}
