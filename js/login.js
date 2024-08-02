// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the values from the form fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation example
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Normally you would send this data to a server
        alert('Login successful!\nUsername: ' + username);
        // For demonstration, just log to the console
        console.log('Username:', username);
        console.log('Password:', password);
    }
});
