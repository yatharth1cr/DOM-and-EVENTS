let userRoot = document.querySelector('.user-icons');
let computerRoot = document.querySelector('.computer-icons');
let winner = document.querySelector('h2');

let dataSet = [
  {
    name: 'rock',
    beats: 'scissors',
  },
  {
    name: 'paper',
    beats: 'rock',
  },
  {
    name: 'scissors',
    beats: 'paper',
  },
];
// announcing the winner
function getresult(user, computer) {
  if (user.name === computer.name) {
    winner.innerText = `It's a Tie`;
  } else if (user.name === computer.beats) {
    winner.innerText = `👑🎉🥳You Won👑🎉🥳`;
  } else {
    winner.innerText = `❌👎Better luck next time❌👎`;
  }
}

// creating variable globally
let userSelected = {},
  computerSelected = {};

//generatingRandomNumber
function getRandumNum(max = 3) {
  return Math.floor(Math.random() * max);
}

// createUserUI
function createUserUI() {
  userRoot.innerHTML = '';
  dataSet.forEach((icon) => {
    let li = document.createElement('li');
    let i = document.createElement('i');
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i);
    userRoot.append(li);
    if (userSelected.name === icon.name) {
      i.classList.add('selected');
    }
    li.addEventListener('click', () => {
      userSelected = icon;
      computerSelected = dataSet[getRandumNum()];
      createComputerUI();
      createUserUI();
      getresult(userSelected, computerSelected);
    });
  });
}
createUserUI();

// createComputerUI
function createComputerUI() {
  computerRoot.innerHTML = '';
  dataSet.forEach((icon) => {
    let li = document.createElement('li');
    let i = document.createElement('i');
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i);
    computerRoot.append(li);
    if (computerSelected.name === icon.name) {
      i.classList.add('selected');
    }
  });
}
createComputerUI();
