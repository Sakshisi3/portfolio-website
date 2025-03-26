


// Show Registration Page
function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
}

// Show Login Page
function showLogin() {
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

// Handle Registration
function handleRegister() {
    const newUsername = document.getElementById("registerUsername").value;
    const newPassword = document.getElementById("registerPassword").value;

    if (newUsername && newPassword) {
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);
        alert("Registration successful! Now log in.");
        showLogin();
    } else {
        alert("Please enter a username and password.");
    }
}

// Handle Login
function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("portfolioContent").style.display = "block";
        document.getElementById("portfolioContent").classList.add("fade-in");
    } else {
        alert("Invalid credentials! Try again.");
    }
}
// Show all sections after login
function showSections() {
    const sections = ["profileSection", "skillsSection", "projectsSection", "contactSection"];
    sections.forEach((section, index) => {
        setTimeout(() => {
            document.getElementById(section).style.display = "flex";
            document.getElementById(section).classList.add("slide-in");
        }, index * 300);
    });
}
// Show Sections Smoothly
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
            const sectionId = link.getAttribute("href").substring(1);
            document.getElementById(sectionId).style.display = "block";
            document.getElementById(sectionId).classList.add("fade-in");
        });
    });

    document.getElementById("contactForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Message sent successfully!");
        event.target.reset();
    });
});
