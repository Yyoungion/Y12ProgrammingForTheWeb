const showCheckbox = document.getElementById('show-password');
if (showCheckbox) {
    showCheckbox.addEventListener('change', function() {
        const passwordField = document.getElementById('password');
        const confirmField = document.getElementById('confirm-password');
        const type = this.checked ? 'text' : 'password';
        if (passwordField) passwordField.type = type;
        if (confirmField) confirmField.type = type;
    });
}

const form = document.getElementById('registrationForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }

        if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
            alert('Password must contain both letters and numbers!');
            return;
        }

        // Save data
        sessionStorage.setItem('registrationData', JSON.stringify({
            name,
            email,
            dob,
            password
        }));

        // Redirect
        window.location.href = 'results.html';
    });
}

