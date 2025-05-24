const form = document.querySelector('form');
const error = document.getElementById('error');
let inputs = document.querySelectorAll('input');

let hasError = false;

let isEmpty = false;
let validEmail;
let validPhone;

// Resets Error
document.addEventListener('click', () => {
    hasError = false;
    ifError();
})

// Checks For Error
form.addEventListener('submit', (e) => {
    e.preventDefault();
    hasError = false; // reset before checking

    // Filled Fields Or Not
    isEmpty = false;

    inputs.forEach(i => {
        if (i.value.trim() === "") {
            isEmpty = true;
        }
    });

    // Email Validation
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    // Phone Validation
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.trim();
    validPhone = /^\d{7,15}$/.test(phone);

    errorSet(); // call after setting error state
    save();
});

// Sets Error Message 
function errorSet() {
    if (isEmpty) {
        error.textContent = 'Please fill up all required fields';
        hasError = true;
    } else if (!validEmail) {
        error.textContent = 'Please enter a valid email';
        hasError = true;
    } else if (!validPhone) {
        error.textContent = 'Please enter a valid phone number';
        hasError = true;
    } else {
        error.textContent = '';
        hasError = false;
        form.reset();
    }
    ifError();
}

// Error Tag Activator
function ifError() {
    if (hasError) {
        error.classList.add('active');
    } else {
        error.classList.remove('active');
    }
}

// Form Data
function save() {
    let formData = {};
    inputs.forEach(input => {
        formData[input.name] = input.value;
    });
    localStorage.setItem('fdata', JSON.stringify(formData));
}

function load() {
    let fData = localStorage.getItem('fdata');
    console.log(fData);
}