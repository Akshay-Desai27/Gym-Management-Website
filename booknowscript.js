document.getElementById('buyNowForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const nameError = document.getElementById('nameError');
    const addressError = document.getElementById('addressError');
    const contactError = document.getElementById('contactError');

    nameError.textContent = '';
    addressError.textContent = '';
    contactError.textContent = '';

    if (!name || name.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    if (!address || address.trim() === '') {
        addressError.textContent = 'Address is required';
        return false;
    }

    if (!contact || !/^\d{10}$/.test(contact)) {
        contactError.textContent = 'Valid 10 digit contact number is required';
        return false;
    }

    // Form is valid, you can submit it or proceed with further actions
    alert('Form submitted successfully!');
}