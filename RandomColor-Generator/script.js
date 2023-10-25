let clickbox = document.querySelector('.first');
let mousemovebox = document.querySelector('.second');

function generateRandomcolor() {
  let characters = [
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
    code = code + characters[color];
  }
  return code;
}

function handleClick() {
  let color = generateRandomcolor();
  clickbox.style.backgroundColor = color;
}
function handleMousemove() {
  let color = generateRandomcolor();
  mousemovebox.style.backgroundColor = color;
}

clickbox.addEventListener('click', handleClick);
mousemovebox.addEventListener('mousemove', handleMousemove);
