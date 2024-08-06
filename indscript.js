// Get elements
const profileIcon = document.querySelector('.profile-icon img');
const profileDetails = document.getElementById('profileDetails');
const viewEventsBtn = document.getElementById('view-events-btn');
let userEvents = document.getElementById('user-events');

// Toggle profile details visibility on click
profileIcon.addEventListener('click', function() {
    if (profileDetails.style.display === "none" || profileDetails.style.display === "") {
        profileDetails.style.display = "block";
        loadProfileDetails(); // Load profile details when the user clicks on the profile icon
    } else {
        profileDetails.style.display = "none";
    }
});

// Toggle user events visibility on clicking 'View My Events'
viewEventsBtn.addEventListener('click', function() {
    if (userEvents.style.display === "none" || userEvents.style.display === "") {
        userEvents.style.display = "block";
        loadUserEvents(); // Load user events when the button is clicked
    } else {
        userEvents.style.display = "none";
    }
});

// Function to load profile details dynamically
function loadProfileDetails() {
    // Example profile details fetched from backend (to be replaced with actual data from the backend)
    const profileData = {
        name: "Soorya B Raju",
        email: "sooryabraju@gmail.com",
        department: "Computer Science"
    };

    // Populate profile details
    profileDetails.innerHTML = `
        <p>${profileData.name}</p>
        <p>${profileData.email}</p>
        <p>${profileData.department}</p>
    `;
}

// Function to load user events dynamically
function loadUserEvents() {
    // Example events fetched from backend (to be replaced with actual data from the backend)
    const events = [
        { id: 1, name: "Event 1: Film Making Workshop" },
        { id: 2, name: "Event 2: Theatre" }
    ];

    // Clear existing events
    userEvents.innerHTML = '';

    // Populate user events
    events.forEach(event => {
        const eventElement = document.createElement('p');
        eventElement.textContent = event.name;
        eventElement.setAttribute('onclick', `showEvent(${event.id})`);
        userEvents.appendChild(eventElement);
    });
}

// Function to navigate to the event page
function showEvent(eventId) {
    window.location.href = `/events/${eventId}.html`;
}
