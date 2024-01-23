let num = document.querySelectorAll('.btn');
let p = document.querySelector('p');

let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
// event on each btn
num.forEach((el) => {
  el.addEventListener('click', (e) => {
    appendToDisplay(e.target.innerText);
  });
});
function appendToDisplay(ev) {
  if (p.innerText === '0') {
    p.innerText = ev;
  } else {
    p.innerText += ev;
  }
}
// event on equal
equal.addEventListener('click', function () {
  p.innerText = eval(p.innerText);
});

// event on clear
clear.addEventListener('click', function () {
  p.innerText = '0';
});
