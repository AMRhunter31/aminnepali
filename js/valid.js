var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify)

function validated() {
if (email.value !== "admin") {
email.style.border = "1px solid red";
email_error.style.display = "block";
email_error.innerHTML = "Username milena maya";
email.focus();
return false;
}
if (password.value !== "admin") {
password.style.border = "1px solid red";
pass_error.style.display = "block";
pass_error.innerHTML = "Password milena maya";
password.focus();
return false;
}
window.location.href = "assets/home.html";
}

function email_Verify() {
if (email.value === "admin") {
email.style.border = "1px solid silver";
email_error.style.display = "none";
return true;
}
}

function pass_Verify() {
if (password.value === "admin") {
password.style.border = "1px solid silver";
pass_error.style.display = "none";
return true;
}
}






      
       
        
        
      
  
