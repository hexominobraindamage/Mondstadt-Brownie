  let storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
      let currentUser = JSON.parse(storedUser);
      if (currentUser) {
      let signout = document.querySelector("#logger"); // Updated selector
          signout.innerHTML = `<a href="javascript:void(0)" id="signout">Sign Out</a>`;
          signout.addEventListener("click", function() {
              localStorage.removeItem("currentUser");
              window.location.href = "index.html"; // Redirect to index.html after sign out
          });
      } 
    }