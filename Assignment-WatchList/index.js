let root = document.querySelector('ul');
// console.log(root);

let input = document.querySelector('input');
// console.log(input)

let allList = [];

input.addEventListener('keydown', handleInput);

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== '') {
    let list = { name: value, isDone: false };
    allList.push(list);
    event.target.value = '';
    createUI();
  }
}
{
  /* <i class="fa-solid fa-xmark" style="color: #ff0000;"></i> */
}
function createUI() {
  root.innerHTML = '';
  allList.forEach((list, index) => {
    let li = document.createElement('li');
    li.innerText = list.name;
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-xmark');
    deleteIcon.setAttribute('data-id', index);
    li.prepend(checkBox);
    li.append(deleteIcon);
    root.append(li);

    // function handleDelete
    deleteIcon.addEventListener('click', (event) => {
      allList.splice('data-id', 1);
      console.log(allList);
    });

    // function handleMouceOverOut
    deleteIcon.addEventListener('mouseover', () => {
      deleteIcon.style.color = '#ff0000';
    });
    deleteIcon.addEventListener('mouseout', () => {
      deleteIcon.style.color = '#333';
    });
  });
}
