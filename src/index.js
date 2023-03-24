import { validateName, validatePhone, validateEmail, validatePassword } from "login-form-validator"; 

document.getElementById('registerButton').addEventListener("click", () => {
    const inputName = document.getElementById('name');
    const inputPhone = document.getElementById('phone'); 
    const inputEmail = document.getElementById('email'); 
    const inputPassword = document.getElementById('password'); 

    console.log(validateName(inputName)); 
    if (validateName(inputName) == true) {
        inputName.classList.add("valid"); 
        inputName.classList.remove("invalid"); 
    } else {
        inputName.classList.add("invalid"); 
        alert("Enter a valid name"); 
    }

    console.log(validatePhone(inputPhone)); 
    if (validatePhone(inputPhone) == true) {
        inputPhone.classList.add("valid"); 
        inputPhone.classList.remove("invalid"); 
    } else {
        inputPhone.classList.add("invalid"); 
        alert("Enter a valid phone number"); 
    }

    console.log(validateEmail(inputEmail)); 
    if (validateEmail(inputEmail) == true) {
        inputEmail.classList.add("valid"); 
        inputEmail.classList.remove("invalid"); 
    } else {
        inputEmail.classList.add("invalid"); 
        alert("Enter a valid email"); 
    }

    console.log(validatePassword(inputPassword)); 
    if (validatePassword(inputPassword) == true) {
        inputPassword.classList.add("valid"); 
        inputPassword.classList.remove("invalid"); 
    } else {
        inputPassword.classList.add("invalid"); 
        alert("Enter a valid password"); 
    }
})