document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const genderRadio = document.querySelectorAll('input[name="gender"]');
    const contact = document.getElementById('number');
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm-password');
    confirm_password.type = 'password'; // Set the type attribute to 'password'
    const address = document.getElementById('address');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateInputs();
    });

    function setError(element, message) {
        const errorDisplay = element.nextElementSibling;
        errorDisplay.innerText = message;
        element.classList.add('error');
    }

    function setSuccess(element) {
        const errorDisplay = element.nextElementSibling;
        errorDisplay.innerText = '';
        element.classList.remove('error');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateInputs() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const contactValue = contact.value.trim();
        const passwordValue = password.value.trim();
        const confirm_passwordValue = confirm_password.value.trim();
        const addressValue = address.value.trim();

       // Splitting the username into first and last names
    const names = usernameValue.split(" ");
    const firstName = names[0];
    const lastName = names.slice(1).join(" "); // Joining the remaining parts as the last name

         if (usernameValue === '') {
             setError(username, 'Name should not be empty!');
         } else if (names.length < 2) {
             setError(username, 'Please enter full name');
        } else {
             setSuccess(username);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Enter a valid Email Id');
        } else {
            setSuccess(email);
        }

        if (contactValue === '') {
            setError(contact, 'Contact number is required');
        } else if (!/^\d{10}$/.test(contactValue)) {
            setError(contact, 'Contact number must be 10 digits');
        } else {
            setSuccess(contact);
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters');
        } else {
            setSuccess(password);
        }

        if (confirm_passwordValue === '') {
            setError(confirm_password, 'Please confirm your password');
        } else if (confirm_passwordValue !== passwordValue) {
            setError(confirm_password, 'Please enter same Passwords');
        } else {
            setSuccess(confirm_password);
        }

        if (addressValue === '') {
            setError(address, 'Address should not be empty!');
        } else if (addressValue.length <= 50) {
            setError(address, 'Address must be at least 50 characters');
        } else {
            setSuccess(address);
        }

    }
});
