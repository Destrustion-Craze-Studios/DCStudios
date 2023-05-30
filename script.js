function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic validation (e.g., checking if fields are empty)
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Perform authentication logic
    // Replace this with your own authentication logic
    if (username === "admin" && password === "qwertyuiopasdfghjklzxcvbnm") {
        alert("Login successful!");
        window.location.href = "dash.html"; // Redirect to dash.html
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
