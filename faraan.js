let email = document.getElementById("email")
let phonenumber = document.getElementById("PhoneNumber")
let pass = document.getElementById("password")
let err1 = document.getElementById("err1")
let err2 = document.getElementById("err2")
let err3 = document.getElementById("err3")
var regex = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9]+).([a-z]{2,3}).([a-z]{2,3})?$/
var regex2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var regex3=/^([A-Za-z0-9])?$/

function validateEmail(){
    if(email.value.trim()==""){
        email.style.border="2px solid red "
        err1.innerText="Enter  E-mail"
        return false
    }else if(!email.value.match(regex)){
        email.style.border="2px solid red "
        err1.innerText="Email is not in correct format"
        return false
    }else{
        err1.innerText=""
        email.style.border="2px solid green"
        return true
    }
}
function validatePhone(){
    if(phonenumber.value.trim()==""){
        phonenumber.style.border="2px solid red "
        err2.innerText="Enter phone number "
        return false
    }else if(!phonenumber.value.match(regex2)){
        phonenumber.style.border="2px solid red "
        err2.innerText="phone number is not in correct format"
        return false
    }else if(phonenumber.value.length<10){
        phonenumber.style.border="2px solid red "
        err2.innerText="phone number has 10 digits"
        return false
    }else{
        err2.innerText=""
        phonenumber.style.border="2px solid green"
        return true
    }
}
function validatePass(){
    if(pass.value.trim()==""){
        err3.innerText="Enter Password";
        pass.style.border="2px solid red "
        return false
    }else if(pass.value.length<8){
        err3.innerText="Password has minimum 8 charecters";
        pass.style.border="2px solid red "
        return false
    }else if (pass.value.match(regex3)){
        err3.innerText="Password not in correct format";
        pass.style.border="2px solid red "
        return false
    }else{
        err3.innerText=""
        pass.style.border="2px solid green"
        return true
    }
}

function validateform(){
    if(!validateEmail()||!validatePhone()||!validatePass()){
        return false
    }else{
        return true
    }
}