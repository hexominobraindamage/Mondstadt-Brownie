var button = document.getElementById("enter");
button.addEventListener("click", validatePasswords);

function validatePasswords() {
    var password = document.getElementById("pw").value;
    var confirmPassword = document.getElementById("cpw").value;

    if (password === confirmPassword) {
        passwordValidated();
        return;
    } else {
        alert("Password must be the same!");
        return;
    }
}
function passwordValidated() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = "./home.html";
    });
}