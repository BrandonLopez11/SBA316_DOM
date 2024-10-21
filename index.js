const nameInput = document.querySelector('#nameInput');  
const emailInput = document.getElementById('emailInput');  
const form = document.getElementById('contactForm');       
const submitBtn = document.getElementById('submitBtn');

const nameFieldParent = nameInput.parentNode; 


const feedback = document.createElement('div');
feedback.className = 'feedback';
feedback.style.display = 'none'; 
form.appendChild(feedback);


const fragment = document.createDocumentFragment();
const successMessage = document.createElement('p');
successMessage.innerText = 'Your message has been sent successfully!';
successMessage.classList.add('success');
fragment.appendChild(successMessage);


const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = 'blue';  
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '';     
    });
});


form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    feedback.innerHTML = '';
    feedback.style.display = 'none';

  
    const isValidName = validateFullName(nameInput.value);
    const isValidEmail = validateEmail(emailInput.value);

    if (!isValidName || !isValidEmail) {
        // Display error message
        feedback.innerText = 'Please provide a valid full name and email address.';
        feedback.style.color = 'red';
        feedback.style.display = 'block'; 
        alert('Error: Please provide a valid full name and email address!'); 
    } else {
       
        feedback.innerText = '';
        feedback.appendChild(fragment.cloneNode(true)); 
        feedback.style.display = 'block';
        feedback.style.color = 'green';

        form.reset();
    }
});


function validateFullName(name) {
    const nameParts = name.trim().split(' ');
    return nameParts.length >= 2 && nameParts.every(part => part.length > 0);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
    }
});


console.log(`Current URL: ${window.location.href}`); 
console.log(`Viewport width: ${window.innerWidth}`); 


window.setTimeout(() => {
    submitBtn.click();
}, 5000);

