const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const buttonEl = document.getElementById('submit');

let isValid = false;
let passwordMatch = false;

function validateForm(){
    // Using Constraint API
    isValid = form.checkValidity();
    // console.log("isValid",isValid);
    // console.log("submit disabled", buttonEl.disabled);
    //Style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
    }
    //Check to see if passwords match
    if(password1El.value === password2El.value){
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }
    else{
        passwordMatch = false;
        message.textContent = 'Make sure password match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        alert('Make sure password match!');
        return;
    }
    // If form is valid and passwords match
    if(isValid && passwordMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green'; 
        alert('Successfully registered!');
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.name.value,
        email: form.email.value,
        password: form.password.value
    }
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // console.log(e);
    //Validate Form
    validateForm();
    //Submit if valid
    if(isValid && passwordMatch){
        storeFormData();
    }
}

//Event Listener
form.addEventListener('submit', processFormData);