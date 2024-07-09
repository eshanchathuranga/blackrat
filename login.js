document.getElementById('login').addEventListener('click', function() {
    var email = document.getElementById('username').value;
    var password = document.getElementById('pass').value;
    if (email === 'admin' && password === 'blackheart') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid Credentials');
    }
})
