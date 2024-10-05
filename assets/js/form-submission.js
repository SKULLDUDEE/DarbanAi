const scriptURL = 'https://script.google.com/macros/s/AKfycbxckLZsYF9NlMLlr0zjxRS-9JsT1rXrgRnmq6jHatsms7txUTArLyeZF0dTIV4zv50/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert("Thank you! Your form is submitted successfully.");
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again. Error: ' + error.message);
        });
});