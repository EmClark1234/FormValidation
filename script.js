const nameInputBox = document.getElementById("nameInputBox");
const phonNoInputBox = document.getElementById("phonNoInputBox");
const emailInputBox = document.getElementById("emailInputBox");
const messageInputBox = document.getElementById("messageInputBox");
const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const submitError = document.getElementById("submitError");



function validateName(){
    let name = nameInputBox.value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    else if(!name.match(/^([a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+)*[.]{0,1}){1,2}$/)){
        nameError.innerHTML = "Full name is required";
        return false;
    }
    else{
        nameError.innerHTML = '<img height=20 width=20 src="images/icons8-check-48.png">'
        return true;
    }
}


function validatePhoneNo(){
    let phoneNo = phonNoInputBox.value.toString();

    if(phoneNo.length == 0){
        phoneError.innerHTML = "Phone No is required";
        return false;
    }
    else if(!phoneNo.match(/^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/)){
        if(phoneNo.includes("+1") || phoneNo.includes("(") || phoneNo.includes(")") || phoneNo.includes("-")){
            let editNumber = phoneNo.replace(/^\+1|[\D]/g, '');
            phonNoInputBox.value = editNumber;
            phoneError.innerHTML = "Phone No is not valid";
        }
        else{
            phoneError.innerHTML = "Phone No is not valid";
        }
        return false; 
    }
    else{
        phoneError.innerHTML = '<img height=20 width=20 src="images/icons8-check-48.png">';
        formatPhoneNumber(phoneNo);
        return true;
    }
}

function formatPhoneNumber(phoneNumber){
    if(phoneNumber.charAt(0) == "+"){
        return false;
    }
    else if(phoneNumber.charAt(0) != "+"){
        let rawPhoneNo = phoneNumber.toString();
        let countryCode = '+1';
        let areaCode = rawPhoneNo.slice(0,3);
        let telPrefix = rawPhoneNo.slice(3,6);
        let lineNumber = rawPhoneNo.slice(6,10)
        let fullNumber = countryCode + " (" + areaCode + ") " + telPrefix + "-" + lineNumber;
        phonNoInputBox.value = fullNumber;
    }
}

function validateEmail(){
    let email = emailInputBox.value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        return false;
    }
    else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = "Email Invalid"
        return false;
    }
    else{
        emailError.innerHTML = '<img height=20 width=20 src="images/icons8-check-48.png">';
        return true;
    }
}

function validateMessage(){
    let message = messageInputBox.value;
    let requireCharacters = 30;
    let remainingCharacters = requireCharacters - message.length;
    if(remainingCharacters > 0){
        messageError.innerHTML = remainingCharacters + " more characters required";
        return false;
    }
    else{
        messageError.innerHTML = '<img height=20 width=20 src="images/icons8-check-48.png">';
        return true;
    }
}

function submitForm(){
    if(!validateName() || !validatePhoneNo() || !validateEmai() || !validateMessage())
    {
        submitError.style.display = 'inline'
        submitError.innerHTML = "Please fix error(s)"
        setTimeout(function(){submitError.style.display = 'none'}, 3000)
        return false;
    }
}