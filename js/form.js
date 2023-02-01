function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "james@uotagooro.co.uk" && password == "pass") {
        window.location.href = "../api/student.html";
        return false;
    }
    else if (username == "charles@uotagooro.co.uk" && password == "pass") {
        window.location.href = "../api/students.html"
        return false;
    }
    else {
        alert("Incorrect username or password");
        return false;
    }
}