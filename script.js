
// Hotel booking enquiry form

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const guestName = document.getElementById("guest-name").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const roomType = document.getElementById("room-type").value;

    if (checkOut <= checkIn) {
        alert("Please select a check-out date after your check-in date.");
        return;
    }

    document.getElementById("booking-message").textContent =
        "Thank you, " + guestName +
        "! Your " + roomType +
        " enquiry has been received in this demo.";

    bookingForm.reset();
});

// Welcome message

console.log("Welcome to The Grand Horizon!");
