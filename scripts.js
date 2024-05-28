document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const usernameDisplay = document.getElementById('usernameDisplay');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Signup successful!');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            if (username === storedUsername && password === storedPassword) {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    if (usernameDisplay) {
        const storedUsername = localStorage.getItem('username');
        usernameDisplay.textContent = storedUsername;
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        });
    }

    if (window.location.pathname.includes('dashboard.html') && !localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
});
