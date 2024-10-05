function handleFormSubmit(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);
    var object = {};
    formData.forEach((value, key) => {
        if (key === 'saveInfo') {
            object[key] = value === 'on';
        } else {
            object[key] = value;
        }
    });

    var json = JSON.stringify(object);
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbzPNLBNzkL06l6vz_G82J4yasWPw2wUEMjRaPirabrc-o5Q34OPiEMHYv9LsuDfaLxf/exec';

    fetch(scriptUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: json,
        mode: 'cors'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        form.reset();
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again. Error: ' + error.message);
    });
}

// Function to initialize the form
function initForm() {
    var form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// Initialize the form when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initForm);