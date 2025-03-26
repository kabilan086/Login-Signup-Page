
let storedUsername = "";
let storedPassword = "";

function showSignUp() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function signUp() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (username && password && confirmPassword) {
    if (password === confirmPassword) {
      storedUsername = username;  
      storedPassword = password;

      alert("Sign-up successful! Please log in.");
      showLogin();
    } else {
      alert("Passwords do not match. Please try again.");
    }
  } else {
    alert("Please fill in all fields.");
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  
  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password!");
  }
}
