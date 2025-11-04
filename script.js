function greetUser() {
  alert("Welcome, Nurlan! Your site is working.");
}
document.getElementById("ctaButton").addEventListener("click", function () {
  alert("Welcome to Supreme Dispatch!");
});
document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // You can add validation or authentication logic here
document.getElementById("loadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loadId = document.getElementById("loadId").value.trim();
  const pickup = document.getElementById("pickup").value.trim();
  const dropoff = document.getElementById("dropoff").value.trim();

  if (!loadId || !pickup || !dropoff) {
    alert("Please fill in all fields.");
    return;
  }

  // Optional: check format
  if (!/^[A-Z0-9]{4,}$/.test(loadId)) {
    alert("Load ID must be at least 4 characters and contain only letters/numbers.");
    return;
  }

  const result = `✅ Load ${loadId} assigned from ${pickup} to ${dropoff}.`;
  document.getElementById("loadResult").textContent = result;
  this.reset();
});

  // Redirect to second page
  window.location.href = "dashboard.html"; // Replace with your actual second page
});
document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Basic hardcoded authentication
  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials.");
  }
});
