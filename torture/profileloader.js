let playerName = document.querySelector("[playername]")
let playerAvatar = document.querySelector("#playerpfp")
let currentUser = localStorage.getItem("currentUser")
document.addEventListener("DOMContentLoaded", () => {
	let playerVar = JSON.parse(currentUser)
    let avatarDisplay = playerVar['profilePicture']
 playerAvatar.src = avatarDisplay;
 playerName.textContent = playerVar['username']
});