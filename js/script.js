/* --- Welcome Name Message --- */
function welcomeUser() {
            let username = prompt("Please enter your name:");
            if (username) {
                // This now correctly targets the h1 with the new ID
                document.getElementById("welcome-message").innerText = `Welcome, ${username}`;
            }
            // If the user enters nothing, the default "Welcome, User." text remains.
        }

    /* --- Validate Contact Form --- */
function validateForm() {
    let name = document.querySelector('.contact-form input[placeholder="Name"]').value;
    let email = document.querySelector('.contact-form input[placeholder="Email"]').value;
    let message = document.querySelector('.contact-form textarea[placeholder="Message"]').value;

    // First, check if any fields are empty
    if ( name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false; // This PREVENTS the form from submitting and refreshing
    } else {
        // If all fields are filled, create a detailed message
        const alertMessage = `Thank you for contacting us, ${name}!\n\n--- Your Submission ---\nEmail: ${email}\nMessage: ${message}`;
        
        // Show the alert with all the data
        alert(alertMessage);
        
        // After the user clicks "OK", the function finishes
        return true;
    }
}
// This line calls the welcomeUser function as soon as the page is fully loaded.
window.onload = welcomeUser;    