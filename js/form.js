function FormFunc() {
    user_pwd = {
        'alice@uotagooro.co.uk': ['Password', 'Alice Hawash', 'Anthropology', 'Archaeology and Anthropology', '2022-09-01', '2', 'A', 'Alice'],
        'simon@uotagooro.co.uk': ['Password', 'Simon Head', 'Music', 'Liberal Arts', '2021-09-01', '3', 'A', 'Simon'],
        'nigel@uotagooro.co.uk': ['Password', 'Nigel Leaney', 'Music', 'Liberal Arts', '2020-09-01', '6', 'A', 'Nigel'],
        'andrea@uotagooro.co.uk': ['Password', 'Andrea Kinigadner', 'Politics', 'Liberal Arts', '2020-09-01', 6, 'A', 'Andrea'],
        'david@uotagooro.co.uk': ['Password', 'David Munoz Matinez', 'Computer Science Engineering', 'Liberal Arts', '2020-09-01', 6, 'A', 'David'],
        'james@uotagooro.co.uk': ['Password', 'James Williams', 'Computer Science Engineering', 'Computer Science', '2022-09-01', 2, 'A', 'James'],
        'charles@uotagooro.co.uk': ['Password', 'Charles', 'Computer Science Engineering', 'Computer Science', '2021-09-01', 2, 'A', 'Charles']
    }
    localStorage.setItem('testObject', JSON.stringify(user_pwd))
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    console.log(user_pwd[email])
    console.log(email, password)
    if ((email in user_pwd) && (password = 'Password')) {
        localStorage.setItem('currUser', email)
        localStorage.setItem('currUser-name', user_pwd[email][1])
        localStorage.setItem('currUser-course', user_pwd[email][2])
        localStorage.setItem('currUser-dept', user_pwd[email][3])
        localStorage.setItem('currUser-doj', user_pwd[email][4])
        localStorage.setItem('currUser-sem', user_pwd[email][5])
        localStorage.setItem('currUser-grade', user_pwd[email][6])
        localStorage.setItem('currUser-firstname', user_pwd[email][7])
        localStorage.setItem('loggedIn', 'true')

        var delayInMilliseconds = 300; //1 second

        setTimeout(function () {
            window.location.href = '../Pages/students.html'
        }, delayInMilliseconds);
    }
    else {
        alert('wrong cred')
    }

}   