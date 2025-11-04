/*pause
<script src="dashboard.js"></script>
document.getElementById("loadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loadId = document.getElementById("loadId").value;
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  const result = `✅ Load ${loadId} assigned from ${pickup} to ${dropoff}.`;
  document.getElementById("loadResult").textContent = result;

  // Optionally clear the form
  this.reset();
});*/
