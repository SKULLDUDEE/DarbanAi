const scriptURL = 'https://script.google.com/macros/s/AKfycbyePgm_RgxDq1ZY-k0R-8x-3mGFIh7Fl8-2qfgprj-8MHEG5DQcz5HeD3QjZA8ZeAo/exec';
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