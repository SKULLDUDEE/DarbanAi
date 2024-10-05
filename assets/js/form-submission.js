function handleFormSubmit(formObject) {
    event.preventDefault();
    var formData = new FormData(formObject);
    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);

    // First, send a preflight request
    fetch('https://script.google.com/macros/s/AKfycbz1ghrSKSReYWV4rn3HZziryX8r6QnFKtSxWn1Am3tMw2Bhx5GET8AKNZpW2olc6vRs/exec' + '?header=TRUE', {
        method: 'OPTIONS',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(() => {
        // If preflight is successful, send the actual request
        return fetch('https://script.google.com/macros/s/AKfycbz1ghrSKSReYWV4rn3HZziryX8r6QnFKtSxWn1Am3tMw2Bhx5GET8AKNZpW2olc6vRs/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: json
        });
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