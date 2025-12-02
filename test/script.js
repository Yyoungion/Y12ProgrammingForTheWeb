document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the show password checkbox
    const showCheckbox = document.getElementById('show-password');
    if (showCheckbox) {
        showCheckbox.addEventListener('change', function() {
            const passwordField = document.getElementById('password');
            const confirmField = document.getElementById('confirm-password');
            const type = this.checked ? 'text' : 'password'; // Toggle between 'text' and 'password'
            if (passwordField) passwordField.type = type; // Set the password field type
            if (confirmField) confirmField.type = type; // Set the confirm password field type
        });
    }

    // Handle form submission
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form values
            const name = document.getElementById('name') ? document.getElementById('name').value : '';
            const email = document.getElementById('email') ? document.getElementById('email').value : '';
            const dob = document.getElementById('dob') ? document.getElementById('dob').value : '';
            const password = document.getElementById('password') ? document.getElementById('password').value : '';
            const confirmPassword = document.getElementById('confirm-password') ? document.getElementById('confirm-password').value : '';

            // Simple validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return; // Stop form submission
            }

            // Validate password strength
            if (password.length < 8) {
                alert('Password must be at least 8 characters long!');
                return;
            }

            if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
                alert('Password must contain both letters and numbers!');
                return;
            }

            // Redirect to results page
            window.location.href = 'results.html';
        });
    }
});