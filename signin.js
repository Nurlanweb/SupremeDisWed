/*document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // You can add real authentication logic here later
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    // Redirect to dashboard or welcome page
    window.location.href = "dashboard.html"; // Replace with your actual page
  } else {
    alert("Please enter both username and password.");
  }
});*/

document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Basic hardcoded check (for demo only)
  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html"; // Redirect on success
  } else {
    alert("Invalid username or password.");
  }
});
