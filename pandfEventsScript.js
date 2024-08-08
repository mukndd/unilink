// Get elements
const profileIcon = document.querySelector('.profile-icon img');
const profileDetails = document.getElementById('profileDetails');
const viewEventsBtn = document.getElementById('view-events-btn');
const upcomingEventsList = document.getElementById('upcoming-events-list');
const pastEventsList = document.getElementById('past-events-list');

// Toggle profile details visibility on click
profileIcon.addEventListener('click', function() {
    // Fetch club details from the database
    fetchClubDetails().then(clubDetails => {
        // Clear existing content
        profileDetails.innerHTML = '';

        // Populate the profileDetails div with club details
        clubDetails.forEach(club => {
            const clubElement = document.createElement('p');
            clubElement.textContent = `${club.name} - ${club.position}`;
            profileDetails.appendChild(clubElement);
        });

        // Toggle visibility
        if (profileDetails.style.display === "none" || profileDetails.style.display === "") {
            profileDetails.style.display = "block";
        } else {
            profileDetails.style.display = "none";
        }
    }).catch(error => {
        console.error("Error fetching club details:", error);
    });

    // Fetch events data
    fetchEventsData().then(events => {
        // Clear existing event lists
        upcomingEventsList.innerHTML = '';
        pastEventsList.innerHTML = '';

        // Populate the event lists with fetched data
        events.upcoming.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.textContent = `${event.name} - ${event.date}`;
            upcomingEventsList.appendChild(eventItem);
        });

        events.past.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.textContent = `${event.name} - ${event.date}`;
            pastEventsList.appendChild(eventItem);
        });
    }).catch(error => {
        console.error("Error fetching events data:", error);
    });
});

// Function to fetch club details from the backend
function fetchClubDetails() {
    return fetch('/api/club-details')  // Replace with the actual API endpoint
        .then(response => response.json())
        .then(data => data.clubs)
        .catch(error => Promise.reject("Failed to fetch club details"));
}

// Function to fetch events data from the backend
function fetchEventsData() {
    return fetch('/api/user-events')  // Replace with the actual API endpoint
        .then(response => response.json())
        .then(data => {
            return {
                upcoming: data.upcomingEvents,
                past: data.pastEvents
            };
        })
        .catch(_error => Promise.reject("Failed to fetch events data"));
}
