// Function to handle form submission
function handleFormSubmit(formObject, event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create a FormData object from the form
    var formData = new FormData(formObject);

    // Convert FormData to a plain object
    var object = {};
    formData.forEach((value, key) => {object[key] = value});

    // Convert the object to JSON
    var json = JSON.stringify(object);

    // URL of your Google Apps Script web app
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbx35Scjtgj9wXsy5Ok10N-D8F0ind8E7C7myH-YP7s2GKHBHHnEU97Wf2EvMDt3wScG/exec';

    // Send the POST request to the Google Apps Script
    fetch(scriptUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: json
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        formObject.reset(); // Reset the form
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });

    // Return false to prevent traditional form submission
    return false;
}

// Function to initialize the form
function initForm() {
    var form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            handleFormSubmit(this, event);
        });
    }
}

// Initialize the form when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initForm);