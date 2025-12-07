// Get the show password checkbox element
const showCheckbox = document.getElementById('show-password');

// Add event listener to toggle password visibility when checkbox is clicked
if (showCheckbox) {
    showCheckbox.addEventListener('change', function() {
        // Get password and confirm password input fields
        const passwordField = document.getElementById('password');
        const confirmField = document.getElementById('confirm-password');
        
        // Toggle input type between 'text' and 'password' based on checkbox state
        const type = this.checked ? 'text' : 'password';
        
        // Apply type change to both password fields
        if (passwordField) passwordField.type = type;
        if (confirmField) confirmField.type = type;
    });
}

// Get the registration form element
const form = document.getElementById('registrationForm');

// Add event listener to handle form submission
if (form) {
    form.addEventListener('submit', function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Get values from all form input fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate that passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Validate password is at least 8 characters long
        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }

        // Validate password contains both letters and numbers
        if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
            alert('Password must contain both letters and numbers!');
            return;
        }

        // Save registration data to sessionStorage for retrieval on results page
        sessionStorage.setItem('registrationData', JSON.stringify({
            name,
            email,
            dob,
            password
        }));

        // Redirect user to results page after successful validation
        window.location.href = 'results.html';
    });
}

