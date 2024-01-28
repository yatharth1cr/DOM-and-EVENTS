let form = document.querySelector('form');
let result = document.querySelector('article');

// function does contain a number
function doesContainANumber(string) {
  return string.split('').some((e) => Number(e));
}

// declared an empty string
let userEror = '';

// handle submit
function handleInput(event) {
  let nameElm = event.target.elements.name;

  // selecting the parentelm of nameElm
  let parentElm = document.querySelector('#name');
  if (nameElm.value === '') {
    userEror = "Can't be empty";
    parentElm.classList.add('error');
  } else if (nameElm.value.length < 5) {
    userEror = "Can't be less than 5 Character";
    parentElm.classList.add('error');
  } else if (!doesContainANumber(nameElm.value)) {
    userEror = 'Must contain atleast a number';
    parentElm.classList.add('error');
  } else {
    userEror = '';
    parentElm.classList.remove('error');
    parentElm.classList.add('success');
  }

  nameElm.nextElementSibling.innerText = userEror;
}

// declared an empty object
let userInfo = {};

// Function handleUserInfo
function handleUserInfo(event) {

  // storing the values with creating key in and storing it into object userInfo
  userInfo.name = form.elements.name.value;
  userInfo.email = form.elements.email.value;
  userInfo.love = form.elements.love.value;
  userInfo.color = form.elements.color.value;
  userInfo.rating = form.elements.rating.value;
  userInfo.genre = form.elements.genre.value;
  userInfo.terms = form.elements.terms.checked;
  // console.log(userInfo);
}

function createUI() {
  let div = document.createElement('div');

  let name = document.createElement('h1');
  name.innerText = `Hello ${userInfo.name}`;

  let email = document.createElement('h3');
  email.innerText = `Email: ${userInfo.email}`;

  let love = document.createElement('h3');
  love.innerText = `You Love: ${userInfo.love}`;

  let color = document.createElement('h3');
  color.innerText = `Color: ${userInfo.color}`;

  let rating = document.createElement('h3');
  rating.innerText = `Rating: ${userInfo.rating}`;

  let genre = document.createElement('h3');
  genre.innerText = `Book Genre: ${userInfo.genre}`;

  let terms = document.createElement('h3');
  if (userInfo.terms === true) {
    terms.innerText = '✅You Agree with Term & Condition✅';
  } else {
    terms.innerText = '❌Not Agree with Term & Condition❌';
  }

  // append all the elements in a div
  div.append(name, email, love, color, rating, genre, terms);

  // append div to the result and adding class for the final result
  result.append(div);
  result.classList.add('container');

  // to change the main heading
  let heading = document.querySelector('#h1');
  heading.innerText = '👑🎊INFORMATION🎊👑';

  // to disappear the form
  form.style.display = 'none';

  // to show the card
  result.style.display = 'block';

  // event on close btn
  let closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    location.reload();
  });
}

function handleCall(event) {
  event.preventDefault();

  handleInput(event);

  handleUserInfo();

  createUI();
}

// event on form
form.addEventListener('submit', handleCall);
