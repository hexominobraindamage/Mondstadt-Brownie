document.addEventListener("DOMContentLoaded", function () {
    fetch("../navbar.html") // Ensure the correct relative path is used
      .then((response) => {
        if (!response.ok) {
          console.warn(`Navbar not found. HTTP status: ${response.status}`);
          return ""; // Return empty string if navbar.html is missing
        }
        return response.text();
      })
      .then((data) => {
        if (document.body) {
          document.body.insertAdjacentHTML("afterbegin", data);
        } else {
          console.error("Document body is not available. Retrying...");
          document.addEventListener("DOMContentLoaded", () => {
            document.body.insertAdjacentHTML("afterbegin", data);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching navbar:", error);
      });
  });

  let storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
      let currentUser = JSON.parse(storedUser);
      let user = document.querySelector(".account"); // Updated selector
      if (user) {
          user.innerHTML = `
              <a href="./profile.html" class="user-link">${currentUser.username}</a>
              <a href="./index.html" class="logout">Logout</a>
          `;
      } else {
          console.warn("Element with class 'account' not found in the DOM."); // Updated warning
      }
  }