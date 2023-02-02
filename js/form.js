function loginFunc() {
    console.log('dfdfjdfj')
    var object = {}
    var inputEmail = document.getElementById("email").value;
    var inputPassword = document.getElementById('password').value;
    object['email'] = inputEmail
    object['password'] = inputPassword

    console.log(object)

    fetch('https://uotagooro.co.uk/api/login', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }).then(response => response.json()).then(
        data => {
            console.log(data);
        }
    ).catch(error => {
        console.error('Error:', error)
    })


    // localStorage.setItem('email', inputEmail)
    // localStorage.getItem('password', inputPassword)

}   