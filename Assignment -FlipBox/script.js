// -----Without Event Delegation-----
let blockWithout = document.querySelectorAll('.first li');

function getNum(smallboxes) {
  let num = Math.floor(Math.random() * 13);
  smallboxes.innerText = num;
}

blockWithout.forEach((smallboxes) =>
  smallboxes.addEventListener('click', function () {
    getNum(smallboxes);
    setTimeout(function () {
      smallboxes.innerText = '';
    }, 5000);
  })
);

// -----With Event Delegation-----
let blockWith = document.querySelector('.second');

blockWith.addEventListener('click', function (event) {
  let num = Math.floor(Math.random() * 13);
  event.target.innerText = num;
  setTimeout(function () {
    event.target.innerText = '';
  }, 5000);
});
