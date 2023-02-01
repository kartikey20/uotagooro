function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "demo" && password == "pass") {
        window.location.href = "../api/student.html";
        return false;
    } else {
        alert("Incorrect username or password");
        return false;
    }
}