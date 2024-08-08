document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('clubLoginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the email and password values from the form
        const clubEmail = document.getElementById('clubEmail').value;
        const clubPassword = document.getElementById('clubPassword').value;

        // Create a data object to send to the backend
        const loginData = {
            email: clubEmail,
            password: clubPassword
        };

        // Send the login data to the server for verification
        fetch('/clubAdminLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to the club admin dashboard or homepage
                window.location.href = '/clubAdminDashboard.html';
            } else {
                // Display an error message
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        });
    });
});
