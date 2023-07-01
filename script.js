// User account data
var storedAccounts = [
  { username: "TCBased", password: "DCStudios132", role: "admin" },
  { username: "Mortada", password: "DCStudios213", role: "admin" },
  { username: "admin", password: "DCStudios321", role: "admin" },
  // Add more user accounts as needed
];

function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  var username = usernameInput.value;
  var password = passwordInput.value;

  // Perform basic validation (e.g., checking if fields are empty)
  if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
  }

  // Perform authentication logic
  var foundAccount = storedAccounts.find(function(account) {
      return account.username === username && account.password === password;
  });

  if (foundAccount) {
      alert("Login successful!");

      // Set the logged-in username in the appropriate element
      var loggedInUsernameElements = document.getElementsByClassName("logged-in-username");
      for (var i = 0; i < loggedInUsernameElements.length; i++) {
          loggedInUsernameElements[i].textContent = foundAccount.username;
      }

      // Check the user's role to determine the appropriate dashboard
      if (foundAccount.role === "admin") {
          window.location.href = "admin-dashboard.html"; // Redirect to admin dashboard
      } else {
          window.location.href = "user-dashboard.html"; // Redirect to user dashboard
      }
  } else {
      alert("Invalid username or password. Please try again.");
  }
}
