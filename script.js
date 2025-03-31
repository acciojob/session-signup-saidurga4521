//your JS code here. If required.
// Get references to the input fields and button
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const signUpButton = document.getElementById("submit");

// Add event listener to the button
signUpButton.addEventListener("click", () => {
    // Get input values
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    // Check if passwords match
    if (passwordValue === confirmPasswordValue) {
        // Store data in sessionStorage
        sessionStorage.setItem("name", nameValue);
        sessionStorage.setItem("email", emailValue);
        sessionStorage.setItem("password", passwordValue); // ⚠️ Password should not be stored in plain text in real applications!

        // Show success message
        alert("Sign up successful!");
    } else {
        // Show error message if passwords don't match
        alert("Passwords do not match");
    }
});

