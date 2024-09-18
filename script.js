var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var check=document.getElementById('submit');
var confirm=document.getElementById('confirm');

    check.addEventListener('click',function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
            confirm.innerHTML="error";
            confirm.style.color='red';
            confirm.style.display='block';
        } else {
            confirm.innerHTML="confirm";
            confirm.style.color='green';
            confirm.style.display='block';
        }
    })


