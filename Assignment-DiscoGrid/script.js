let box = document.querySelectorAll('.boxes');

function generateRandomcolor() {
  let character = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  let code = '#';
  for (let i = 0; i < 6; i++) {
    let color = Math.floor(Math.random() * 16);
    code = code + character[color];
  }
  return code;
}

function handleColor() {
  box.forEach((elc) => {
    elc.style.backgroundColor = generateRandomcolor();
  });
}
box.forEach((elc) => {
  elc.addEventListener('mousemove', handleColor);
});

function getnumber() {
  let num = Math.floor(Math.random() * 500);
  return num;
}

function handleNum() {
  box.forEach((eln) => {
    eln.innerText = getnumber();
  });
}
box.forEach((eln) => eln.addEventListener('mousemove', handleNum));
