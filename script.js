function validateForm(event) {
    // Add your form validation logic here
    // ...

    // Prevent the default form submission
    event.preventDefault();
}

function registerUser() {
    // Show loader while processing registration
    showLoader();

    // Simulate an asynchronous process (e.g., AJAX request)
    setTimeout(() => {
        // Hide loader after processing
        hideLoader();

        // Navigate to the second page
        window.location.href = 'app.html';
    }, 2000); // Simulating a 2-second delay, replace with actual registration logic
}
CSS (menu.css);
