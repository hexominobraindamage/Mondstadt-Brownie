var button = document.getElementById("enter");
button.addEventListener("click", validatePasswords);

function validatePasswords() {
    var password = document.getElementById("pw").value;
    var confirmPassword = document.getElementById("cpw").value;

    if (password === confirmPassword) {
        return
    } else {
        alert("Please check your password!");
        return
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = "./home.html";
    });
});