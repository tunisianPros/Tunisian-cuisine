
  var emailSignUpInput = document.getElementById('CreateEmail');
  var passwordSignUpInput = document.getElementById('NewPass');
  var confirmPasswordSignUpInput = document.getElementById('ConfirmPass');
  var emailSignInInput = document.getElementById('emailSign');
  var passwordSignInInput = document.getElementById('passwordSign');
  var signupButton=document.getElementById('btn1')
  var loginButton=document.getElementById('btn2')

  function storeUserData(email, password) {
    var userData = { email: email, password: password };
    localStorage.setItem('userData', JSON.stringify(userData));
  }


  function getUserData() {
    var userData = localStorage.getItem('userData');
    return JSON.parse(userData);
  }



  signupButton.addEventListener('click', function () {
    var email = emailSignUpInput.value;
    var password = passwordSignUpInput.value;
    var confirmPassword=confirmPasswordSignUpInput.value
    console.log("Signup email:", email);
    console.log("Signup password:", password);
    console.log("Confirm password:", confirmPassword);
    storeUserData(email, password);
    alert('Thank you');
  });


  loginButton.addEventListener('click', function () {
    var email = emailSignInInput.value;
    var password = passwordSignInInput.value;
    console.log("Login email:", email);
    console.log("Login password:", password);
    var userData = getUserData();
    if (userData && email === userData.email && password === userData.password) {
      alert('Welcome');
    } else {
      alert('make sure u have an account before logging in ');
    }
  });

  


