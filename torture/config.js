// because recycling is good for the environment, and this is a good practice to do so.
// thanks poicitaco on github for the fixed codebase

const saveChanges = document.querySelector("[save-modified-changes]");
const savePassword = document.querySelector("[confirm-new-pw]");
const newPasswordInput = document.querySelector("#newpw");
const confirmNewPasswordInput = document.querySelector("#confirmnewpw");

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;

saveChanges.addEventListener("click", saveData);
savePassword.addEventListener("click", changePassword);

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

function saveData(event) {
  event.preventDefault();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex(
    (user) =>
      user.username === currentUser.username || user.email === currentUser.email
  );

  const newUsername = document.getElementById("namechange").value.trim();
  const newEmail = document.getElementById("emailchange").value.trim();
  const imageFile = document.getElementById("file-upload").files[0];

  if (newUsername && newUsername.length < 6) {
    alert("Username is too short! Lengthen it to at least 6 characters.");
    return;
  } else if (newUsername === currentUser.username) {
    alert("This is already your current username!");
    return;
  }

  if (newEmail && !newEmail.includes("@")) {
    alert("Email is in invalid format!");
    return;
  } else if (newEmail === currentUser.email) {
    alert("This is already your current email!");
    return;
  }

  if (newUsername) currentUser.username = newUsername;
  if (newEmail) currentUser.email = newEmail;

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = e.target.result;
      document.getElementById("image-display").src = image;
      currentUser.profilePicture = image;

      // Update localStorage after reading the image
      if (index !== -1) {
        users[index] = { ...users[index], ...currentUser };
        localStorage.setItem("users", JSON.stringify(users));
      }
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    };
    reader.readAsDataURL(imageFile);
  } else {
    if (index !== -1) {
      users[index] = { ...users[index], ...currentUser };
      localStorage.setItem("users", JSON.stringify(users));
    }
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  alert("Changes saved successfully!");
  location.reload();
}

function changePassword(event) {
  event.preventDefault();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const oldPasswordValue = document.querySelector("#oldpw").value;
  const newPasswordValue = newPasswordInput.value;
  const index = users.findIndex(
    (user) =>
      user.username === currentUser.username || user.email === currentUser.email
  );
  const oldPassword = currentUser.password;
  if (oldPasswordValue !== oldPassword) {
    alert("Your old password is incorrect!");
  }
  if (newPasswordInput.length < 8) {
    alert(
      "Password is too short to be secure! Lengthen it to at least 8 characters."
    );
    // Stop further execution
  } else if (!newPasswordValue.match(upperCaseLetters)) {
    alert("Password must contain at least one uppercase letter!");
    return; // Stop further execution
  } else if (!newPasswordValue.match(lowerCaseLetters)) {
    alert("Password must contain at least one lowercase letter!");
    return; // Stop further execution
  } else if (!newPasswordValue.match(numbers)) {
    alert("Password must contain at least one number!");
    return; // Stop further execution
  } else if (newPasswordValue !== confirmNewPasswordInput.value) {
    alert("Password must be the same!");
    return; // Stop further execution
  } else if (newPasswordValue === oldPasswordValue) {
    alert("Your new password is the same as your old one!");
    return; // Stop further execution
  } else {
    if (newPasswordValue) {
      currentUser.password = newPasswordValue;
      if (index !== -1) {
        users[index] = { ...users[index], ...currentUser };
        localStorage.setItem("users", JSON.stringify(users));
      }
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      alert("Changes saved successfully!");
      location.reload();
    }
  }
}

newPasswordInput.addEventListener("input", function () {
  const passwordlength = newPasswordInput.value.length;
  if (passwordlength < 8 && passwordlength != 0) {
    document.getElementById("strength").innerText = "Strength: Bad";
    document.getElementById("strength").style.color = "#ff0000";
  } else if (
    (passwordlength >= 8 && !newPasswordInput.value.match(upperCaseLetters)) ||
    !newPasswordInput.value.match(numbers) ||
    !newPasswordInput.value.match(lowerCaseLetters)
  ) {
    document.getElementById("strength").innerText =
      "Strength: Needs improvement";
    document.getElementById("strength").style.color = "#ff6200";
  } else if (
    passwordlength >= 8 &&
    passwordlength < 12 &&
    newPasswordInput.value.match(upperCaseLetters) &&
    newPasswordInput.value.match(numbers) &&
    newPasswordInput.value.match(lowerCaseLetters)
  ) {
    document.getElementById("strength").innerText = "Strength: OK";
    document.getElementById("strength").style.color = "#f5ce42";
  } else if (
    passwordlength >= 10 &&
    passwordlength < 12 &&
    newPasswordInput.value.match(upperCaseLetters) &&
    newPasswordInput.value.match(numbers) &&
    newPasswordInput.value.match(lowerCaseLetters)
  ) {
    document.getElementById("strength").innerText = "Strength: Medium";
    document.getElementById("strength").style.color = "#9ad104";
  } else if (
    passwordlength >= 12 &&
    passwordlength < 14 &&
    newPasswordInput.value.match(upperCaseLetters) &&
    newPasswordInput.value.match(numbers) &&
    newPasswordInput.value.match(lowerCaseLetters)
  ) {
    document.getElementById("strength").innerText = "Strength: Good";
    document.getElementById("strength").style.color = "#23d104";
  } else if (
    passwordlength >= 14 &&
    passwordlength < 20 &&
    newPasswordInput.value.match(upperCaseLetters) &&
    newPasswordInput.value.match(numbers) &&
    newPasswordInput.value.match(lowerCaseLetters)
  ) {
    document.getElementById("strength").innerText = "Strength: Strong";
    document.getElementById("strength").style.color = "#04d1a8";
  } else if (
    passwordlength >= 20 &&
    passwordlength < 30 &&
    newPasswordInput.value.match(upperCaseLetters) &&
    newPasswordInput.value.match(numbers) &&
    newPasswordInput.value.match(lowerCaseLetters)
  ) {
    document.getElementById("strength").innerText = "Strength: Very Strong";
    document.getElementById("strength").style.color = "#0489d1";
  } else if (
    passwordlength >= 30 &&
    passwordlength < 50 &&
    newPasswordInput.value.match(upperCaseLetters) &&
    newPasswordInput.value.match(numbers) &&
    newPasswordInput.value.match(lowerCaseLetters)
  ) {
    document.getElementById("strength").innerText =
      "Strength: Very strong \n There are no easter eggs here!";
    document.getElementById("strength").style.color = "#0434d1";
  }
});

function fetchData() {
  const playerName = JSON.parse(localStorage.getItem("currentUser")).username;
  const currentEmail = JSON.parse(localStorage.getItem("currentUser")).email;
  // const currentPassword = JSON.parse(localStorage.getItem("cuconstrrentUser")).password;
  const currentProfilePicture = JSON.parse(
    localStorage.getItem("currentUser")
  ).profilePicture;
  document.querySelector("[current-player-name]").textContent =
    "Current player name: " + playerName;
  document.querySelector("[current-email]").textContent =
    "Current email: " + currentEmail;
  if (currentProfilePicture) {
    document.querySelector("#image-display").src = currentProfilePicture;
  }
}
