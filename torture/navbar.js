let storedUser = localStorage.getItem("currentUser");
let avatar = document.querySelector("#avatardisp");
const avatarFrame = document.querySelector("#avatar");
const loginButton = document.querySelector(".account");
const welcomeText = document.querySelector("#name");
const pumpbility = document.querySelector("#pb")

if (storedUser) {
  let currentUser = JSON.parse(storedUser);
  let avatarImage = currentUser['profilePicture']; //s Parse avatarImage only if storedUser exists
  if (currentUser) {
    let signout = document.querySelector("#logger");
    signout.innerHTML = `<a href="javascript:void(0)" id="signout">Sign Out</a>`;
    signout.addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      window.location.href = "index.html"; // Redirect to index.html after sign out
    })
    avatar.src = avatarImage; 
    avatarFrame.style.display = "block"; // Show the avatar frame if user is logged in
    welcomeText.innerHTML = `You are currently logged in as <span style="font-size: x-large; font-weight: 700;">${currentUser.username}</span>`;
    pumpbility.innerHTML = `<h3>Pumpbility: 0</h3>`
  } 
}  