document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = "./home.html";
    });
});