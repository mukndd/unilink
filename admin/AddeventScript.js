document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create FormData object to handle form data
    const formData = new FormData(this);

    // Create an object to hold form data
    const eventData = {
        clubName: formData.get('clubName'),
        eventName: formData.get('eventName'),
        eventDate: formData.get('eventDate'),
        eventTime: formData.get('eventTime'),
        eventVenue: formData.get('eventVenue'),
        acknowledgedDoc: formData.get('acknowledgedDoc'),
        eventDescription: formData.get('eventDescription')
    };

    // Submit form data to the server
    fetch('/api/submit-event', { // Replace with your actual API endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Event details submitted successfully!');
            // Optionally reset the form or redirect
            document.getElementById('eventForm').reset();
        } else {
            alert('There was an error submitting the event details.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
});

