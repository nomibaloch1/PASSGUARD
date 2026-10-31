
// Get page elements
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");

// Show or hide password
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
});

// Check password requirements
password.addEventListener("input", function () {
    const value = password.value;

    const checks = {
        length: value.length >= 12,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[^A-Za-z0-9]/.test(value)
    };

    // Update requirement list
    for (let check in checks) {
        const item = document.getElementById(check);

        if (checks[check]) {
            item.classList.add("valid");
        } else {
            item.classList.remove("valid");
        }
    }

    // Calculate password strength
    let score = 0;

    for (let check in checks) {
        if (checks[check]) {
            score++;
        }
    }

    // Show strength result
    if (value.length === 0) {
        strengthText.textContent = "Not checked";
        strengthText.style.color = "#b9c5d6";
        strengthFill.style.width = "0";
        strengthFill.style.background = "#ef5350";
    } else if (score <= 2) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "#ef5350";
        strengthFill.style.width = "33%";
        strengthFill.style.background = "#ef5350";
    } else if (score <= 4) {
        strengthText.textContent = "Medium";
        strengthText.style.color = "#f5b942";
        strengthFill.style.width = "66%";
        strengthFill.style.background = "#f5b942";
    } else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "#64d99b";
        strengthFill.style.width = "100%";
        strengthFill.style.background = "#64d99b";
    }
});
