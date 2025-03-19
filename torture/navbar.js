document.addEventListener("DOMContentLoaded", function () {
    fetch("../../../navbar.html")
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
          console.error("Document body is not available.");
        }
      })
      .catch((error) => {
        console.error("Error fetching navbar:", error);
      });
  });