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
    }, '5000');
  })
);
