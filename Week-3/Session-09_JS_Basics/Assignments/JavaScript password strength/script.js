// Your solution goes here

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }

  if (password.toLowerCase().includes("password")) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }

  return true;
}

console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123")); // true
