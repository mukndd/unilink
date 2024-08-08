// Get elements
const profileIcon = document.querySelector('.profile-icon img');
const profileDetails = document.getElementById('profile-details');
const viewEventsBtn = document.getElementById('view-events-btn');

// Toggle profile details visibility on click
profileIcon.addEventListener('click', function() {
    if (profileDetails.style.display === "none" || profileDetails.style.display === "") {
        profileDetails.style.display = "block";
    } else {
        profileDetails.style.display = "none";
    }
});

// Navigate to "My Events" page when clicking the "My Events" button
viewEventsBtn.addEventListener('click', function() {
    window.location.href = 'pandfEvents.html'; // Navigate to the new page
});

// Function to navigate to a specific event page
function showEvent1() {
    window.location.href = 'event1.html';
}

function showEvent2() {
    window.location.href = 'event2.html';
}
