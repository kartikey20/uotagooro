function FormFunc() {
    user_pwd = {
        'alice@uotagooro.co.uk': ['Password', 'Alice Hawash', 'Anthropology', 'Archaeology and Anthropology', '2022-09-01', '2', 'A'],
        'simon@uotagooro.co.uk': ['Password', 'Simon Head', 'Music', 'Liberal Arts', '2021-09-01', '3', 'A'],
        'nigel@uotagooro.co.uk': ['Password', 'Nigel Leaney', 'Music', 'Liberal Arts', '2020-09-01', '6', 'A'],
        'andrea@uotagooro.co.uk': ['Password', 'Andrea Kinigadner', 'Politics', 'Liberal Arts', '2020-09-01', 6, 'A'],
        'david@uotagooro.co.uk': ['Password', 'David Munoz Matinez', 'Computer Science Engineering', 'Liberal Arts', '2020-09-01', 6, 'A'],
        'james@uotagooro.co.uk': ['Password', 'James Williams', 'Computer Science Engineering', 'Computer Science', '2022-09-01', 2, 'A'],
        'charles@uotagooro.co.uk': ['Password', 'Charles', 'Computer Science Engineering', 'Computer Science', '2021-09-01', 2, 'A']
    }
    localStorage.setItem('testObject', JSON.stringify(user_pwd))
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    console.log(email, password)
    if ((email in user_pwd) && (password = 'Password')) {
        localStorage.setItem('currUser', email)
        window.location.href = '../api/students.html'
    }
    else {
        alert('wrong cred')
    }

}   