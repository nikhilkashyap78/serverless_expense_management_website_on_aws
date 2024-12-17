// Handle login button click
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "" || password === "") {
      alert("Please fill out both fields.");
      return;
    }
  
    console.log("Login Attempt:", { email, password });
    alert(`Welcome, ${email}!`);
  }
  