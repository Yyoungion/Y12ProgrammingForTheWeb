// Toggle the password input between "password" and "text" so the user can see/hide it.
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password"); // get the password field by id
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // show characters
  } else {
    passwordInput.type = "password"; // hide characters
  }
}

// Attach a submit event to the form with id="Login".
document.getElementById("Login").addEventListener("submit", function(event) {
  event.preventDefault(); // stops the browser from doing a normal form submit/refresh

  // Read the input values — use .value (property), not .value() (function)
  const name = document.getElementById("name").value.trim(); // get name and remove whitespace
  const email = document.getElementById("email").value.trim(); // get email and remove whitespace
  const dob = document.getElementById("dob").value; // get date of birth
  const password = document.getElementById("password").value; // get password
  
  // Define validation patterns
  // emailPattern — basic check for email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // passPattern — requires at least one letter, one digit and minimum length 8
  const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validate email — show alert and stop if invalid
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password strength — show alert and stop if invalid
  if (!passPattern.test(password)) {
    alert("Password must be at least 8 characters long and include letters and numbers.");
    return;
  }

  // Build the results page HTML using template literals
  const resultPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Registration Results</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <div style="max-width: 500px; padding: 24px; border: 2px solid #d6dbe0; border-radius: 10px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: left;">
        <h2>Registration Successful!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
      </div>
    </body>
    </html>
  `;

  // Replace the entire page with the full HTML document
  document.open();
  document.write(resultPage);
});