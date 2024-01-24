let counter = document.querySelector('h2');
// console.log(counter);

let inc = document.querySelector('.inc');
// console.log(inc);

let dec = document.querySelector('.dec');
// console.log(dec);

let reset = document.querySelector('.reset');
// console.log(reset);

// event on increase btn
inc.addEventListener('click', function () {
  counter.innerText = Number(counter.innerText) + 1;
});

// event on decrease btn
dec.addEventListener('click', function () {
  counter.innerText = Number(counter.innerText) - 1;
});

// event on reset btn
reset.addEventListener('click', function () {
  counter.innerText = 0;
});
