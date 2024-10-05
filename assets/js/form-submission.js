function handleFormSubmit(formObject) {
    event.preventDefault();
    var formData = new FormData(formObject);
    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);

    fetch('https://script.google.com/macros/s/AKfycbxPPrcSGnjwbBfzopcMMfRWRr1A6f5T51w7Lb_mB1NZ0C5QoteLZ7fjr9awox-h23AS/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        formObject.reset();
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });

    return false;
}