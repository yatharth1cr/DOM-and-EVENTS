let form = document.querySelector('form');

// selecting;
let result = document.querySelector('article');

// declared an empty object
let userInfo = {};

// event on form
form.addEventListener('submit', (event) => {
  //to remove(refreshing the page)the default nature of submit
  event.preventDefault();

  //storing the values with creating key in and storing it into object userInfo
  userInfo.name = form.elements.name.value;
  userInfo.email = form.elements.email.value;
  userInfo.love = form.elements.love.value;
  userInfo.color = form.elements.color.value;
  userInfo.rating = form.elements.rating.value;
  userInfo.genre = form.elements.genre.value;
  userInfo.terms = form.elements.terms.checked;

  //call the createUI function
  createUI(userInfo);

  //to disappear the form
  form.style.display = 'none';

  //to show the card
  result.style.display = 'block';

  // event on close btn
  let closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    location.reload();
  });
});

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
}
