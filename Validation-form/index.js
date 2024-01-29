let form = document.querySelector('form');
let userName = document.getElementById('username');
let Name = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let createPassword = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
// console.log(userName, name, email, phoneNumber, password, confirmPassword);

// function handleUserName
function handleUserName() {
  if (userName.value.length < 4) {
    userName.nextElementSibling.innerText =
      "❌UserName can't be less than 4 characters❌";
    userName.classList.add('error');
  } else {
    userName.classList.remove('error');
    userName.classList.add('success');
    userName.nextElementSibling.innerText = '';
  }
}
// event on userName
userName.addEventListener('keyup', handleUserName);

// function handleName
function handleName() {
  if (Name.value.split('').some((el) => Number(el))) {
    Name.nextElementSibling.innerText =
      "❌You can't use number in the Name field❌";
    Name.classList.add('error');
  } else {
    Name.classList.remove('error');
    Name.classList.add('success');
    Name.nextElementSibling.innerText = '';
  }
}
// event on Name
Name.addEventListener('keyup', handleName);

// function handleEmail
function handleEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.nextElementSibling.innerText = '❌Not a valid email format❌';
    email.classList.add('error');
  } else {
    email.classList.remove('error');
    email.classList.add('success');
    email.nextElementSibling.innerText = '';
  }
}
// event on email
email.addEventListener('keyup', handleEmail);

// event on handlePhoneNumber
function handlePhoneNumber() {
  let phoneNumberRegex = /^\d{10}$/;
  if (!phoneNumberRegex.test(phoneNumber.value)) {
    phoneNumber.nextElementSibling.innerText = `❌Enter a valid 10-digit phone number❌`;
    phoneNumber.classList.add('error');
  } else {
    phoneNumber.classList.remove('error');
    phoneNumber.classList.add('success');
    phoneNumber.nextElementSibling.innerText = '';
  }
}
// event on phoneNumber
phoneNumber.addEventListener('keyup', handlePhoneNumber);

// function createPassword
function handleCreatePassword() {
  password = createPassword.value;
  if (
    password.length < 8 ||
    !/[A-Z]/.test(createPassword.value) ||
    !/[\d]/.test(createPassword.value)
  ) {
    createPassword.nextElementSibling.innerText =
      'Password must contain a combination of uppercase and lowercase letters, numbers';
    createPassword.classList.add('error');
  } else {
    createPassword.classList.remove('error');
    createPassword.classList.add('success');
    createPassword.nextElementSibling.innerText = '';
  }
}
// event on createPassword
createPassword.addEventListener('keyup', handleCreatePassword);

// function confirmPassword
function handleConfirmPassword() {
  if (createPassword.value !== confirmPassword.value) {
    confirmPassword.nextElementSibling.innerText = "❌Passwords don't match❌";
    confirmPassword.classList.add('error');
  } else {
    confirmPassword.classList.remove('error');
    confirmPassword.classList.add('success');
    confirmPassword.nextElementSibling.innerText = '';
  }
}
// event on confirmPassword
confirmPassword.addEventListener('keyup', handleConfirmPassword);

// event on form submit
form.addEventListener('submit', handleSubmit);
// function handleSubmit
function handleSubmit(event) {
  event.preventDefault();
  handleUserName();
  handleName();
  handleEmail();
  handlePhoneNumber();
  handleCreatePassword();
  handleConfirmPassword();

  let success = document.querySelectorAll('.success');
  if (success.length === 6) {
    let successful = document.getElementById('successful');
    successful.innerText = '✅User added Successfully✅';
  }
}
