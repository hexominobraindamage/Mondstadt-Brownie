document.addEventListener("DOMContentLoaded", function () {
    fetch("/navbar.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        document.body.insertAdjacentHTML("afterbegin", data);
      })
      .catch((error) => {
        console.error("Error fetching navbar:", error);
      });
  });