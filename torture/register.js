if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}

  
var button = document.getElementById("enter");
button.addEventListener("click", validatePasswords);

function validatePasswords() {

  let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("pw").value;
  var confirmPassword = document.getElementById("cpw").value;

  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Username is too short! Lengthen it to at least 6 characters.");
    return; // Stop further execution
  } else if (password.length < 8) {
    alert(
      "Password is too short to be secure! Lengthen it to at least 8 characters."
    );
    return; // Stop further execution
  } else if (!password.match(upperCaseLetters)) {
    alert("Password must contain at least one uppercase letter!");
    return; // Stop further execution
  } else if (!password.match(lowerCaseLetters)) {
    alert("Password must contain at least one lowercase letter!");
    return; // Stop further execution
  } else if (!password.match(numbers)) {
    alert("Password must contain at least one number!");
    return; // Stop further execution
  } else if (!email.includes("@")) {
    alert("Email is invalid!");
    return; // Stop further execution
  } else if (password !== confirmPassword) {
    alert("Password must be the same!");
    return; // Stop further execution
  }

  // If all validations pass, proceed with storing user data and redirecting
  else {
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    // Check for duplicate username or email
    if (users.some((user) => user.username === username)) {
      alert("Username already exists! Please choose a different username.");
      return;
    }
    if (users.some((user) => user.email === email)) {
      alert("Email already registered! Please use a different email.");
      return;
    }
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    location.href = "./index.html";
  }
}
