document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    // get user password 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    // check email and password 
    if (email == 'sontan@baap.com' && password == 'secret') {
        console.log('Valid')
        window.location.href = 'banking.html';
    }
});
