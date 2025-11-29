// Toggle the password input between "password" and "text" so the user can see/hide it.
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password"); // get the password field by id
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // show characters
  } else {
    passwordInput.type = "password"; // hide characters
  }
}

// Attach a submit event attached to the form with id="Login".
document.getElementById("Login").addEventListener("submit", function(event) {
  event.preventDefault(); // stops the browser from doing a normal form submit/refresh

  // Reads the values
  const name = document.getElementById("name").value();
  const email = document.getElementById("email").value();
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  
  // Simple validation
  // emailPattern — basic check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // passPattern — requires at least one letter, one digit and minimum length 8
  const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validate email — show alert and stops the event if invalid
  if (!emailPattern.test(email)) 
    {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password strength — show alert and stops event if invalid
  if (!passPattern.test(password)) 
    {
    alert("Password must be at least 8 characters long and include letters and numbers.");
    return;
  }
  
  // Build a "results" page.
  const resultPage = `
    <h2>Registration Successful!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
  `;

  // Replace the body with the results HTML.
  document.body.innerHTML = resultPage;
});