document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (could be expanded)
    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        document.getElementById('contactForm').reset(); // Clear the form
    } else {
        alert('Please fill in all fields.');
    }
});
