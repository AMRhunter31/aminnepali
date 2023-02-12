var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify)

function validated() {
if (email.value !== "aminnepali") {
email.style.border = "1px solid red";
email_error.style.display = "block";
email_error.innerHTML = "Incorrect Email";
email.focus();
return false;
}
if (password.value !== "12345678") {
password.style.border = "1px solid red";
pass_error.style.display = "block";
pass_error.innerHTML = "Incorrect Password";
password.focus();
return false;
}
window.location.href = "nextpage.html";
}

function email_Verify() {
if (email.value === "aminnepali") {
email.style.border = "1px solid silver";
email_error.style.display = "none";
return true;
}
}

function pass_Verify() {
if (password.value === "12345678") {
password.style.border = "1px solid silver";
pass_error.style.display = "none";
return true;
}
}






      
       
        
        
      
  