let slideIndex = 0;
showSlides();

// Modal functionality
const modal = document.getElementById("loginModal");
const btn = document.querySelector("#loginLink"); // Assuming you added an ID to the login link
const span = document.getElementsByClassName("close")[0];
const studentBtn = document.getElementById("studentLogin");
const clubBtn = document.getElementById("clubLogin");

// Open the modal when the user clicks the login link
if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

// Close the modal when the user clicks on <span> (x)
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Redirect to the appropriate login page based on the user's choice
if (studentBtn) {
    studentBtn.onclick = function() {
        window.location.href = 'studentLogin.html'; // Replace with actual student login URL
    }
}

if (clubBtn) {
    clubBtn.onclick = function() {
        window.location.href = 'clubAdminLogin.html'; // Replace with actual club admin login URL
    }
}

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
