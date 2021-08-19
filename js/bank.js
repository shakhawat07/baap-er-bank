document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    if (email == 'sontan@baap.com' && password == 'secret') {
        console.log('Valid')
        window.location.href = 'banking.html';
    }
});
