var passwordInput = document.getElementById('password-id');
var usernameInput = document.getElementById('username-id');
var loginBtn = document.getElementById('login-btn');

loginBtn.disabled = true;

passwordInput.onkeyup = function() {
    let passwordLength = document.getElementById('password-id').value.length;
    let usernameLength = document.getElementById('username-id').value.length;
    
    if (passwordLength >= 6 && usernameLength >= 1){
        loginBtn.style.backgroundColor = "#0095f6";
        loginBtn.disabled = false;
    }
    else{
        usernameInput.onkeyup = function(){
            let usernameLength = document.getElementById('username-id').value.length;
            if(usernameLength == 0){
                loginBtn.style.backgroundColor = "rgba(0,149,246,0.3)";
                loginBtn.disabled = true;
            }
            else if(usernameInput >= 1 && passwordLength <6 ){
                loginBtn.style.backgroundColor = "rgba(0,149,246,0.3)";
                loginBtn.disabled = true;
            }
        }
        loginBtn.style.backgroundColor = "rgba(0,149,246,0.3)";
        loginBtn.disabled = true;
    }  
}
  