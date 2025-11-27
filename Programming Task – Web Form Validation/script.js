document.getElementById("Login").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const showPassword = document.getElementById("showPassword").checked;
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailPattern.test(email)) 
    {
    alert("Please enter a valid email address.");
    return;
  }

  if (!passPattern.test(password)) 
    {
    alert("Password must be at least 8 characters long and include letters and numbers.");
    return;
  }

  if (password !== confirmPassword) 
    {
    alert("Passwords do not match.");
    return;
  }
  
  const resultPage = `
    <h2>Registration Successful!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${'*'.repeat(password.length)}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
  `;

  document.body.innerHTML = resultPage;
});
