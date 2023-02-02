function loggedFunc() {
    console.log('run')
    var session = localStorage.getItem('loggedIn')
    if (session == 'true') {

        var delayInMilliseconds = 300; //1 second

        setTimeout(function () {
            window.location.href = '../Pages/students.html'
        }, delayInMilliseconds);

    }
    else {

        window.location.href = '../Pages/login.html'
    }
}