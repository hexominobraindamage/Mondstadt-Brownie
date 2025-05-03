let storedUser = localStorage.getItem("currentUser");
let avatar = document.querySelector("#avatar");
if (storedUser) {
  let currentUser = JSON.parse(storedUser);
  if (currentUser) {
    let signout = document.querySelector("#logger");
    signout.innerHTML = `<a href="javascript:void(0)" id="signout">Sign Out</a>`;
    signout.addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      window.location.href = "index.html"; // Redirect to index.html after sign out
    });
  } else if (!currentUser){
    avatar.innerHTML = `` // doesnt work
  }
}
