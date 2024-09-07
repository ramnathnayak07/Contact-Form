document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').textContent = 'Thank you for your message! We will get back to you shortly.';
        document.getElementById('contactForm').reset();
        document.getElementById('responseMessage').style.color = '#2ecc71'; // Success color
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Something went wrong. Please try again.';
        document.getElementById('responseMessage').style.color = '#e74c3c'; // Error color
    });
});
