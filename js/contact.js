var emailField = document.getElementById("contact-email");
var emailError = document.getElementById("email-error");


function validateEmail () {

        // Check if the email is same as the format below
        if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            emailError.innerHTML = "Enter a valid email";
            emailField.style.borderColor = "red";
            return false;        
        }
        else {
            emailError.innerHTML = "";
            emailField.style.borderColor = "black";
            return true;
        }
}

var loginField = document.getElementById("login-email");
var loginError = document.getElementById("email-error-login");

function validateLogin () {

    // Check if the email is same as the format below
    if(!loginField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        loginError.innerHTML = "Please enter a valid email";
        loginField.style.borderColor = "red";
        return false;        
    }
    else {
        loginError.innerHTML = "";
        loginField.style.borderColor = "black";
        return true;
    }
}

