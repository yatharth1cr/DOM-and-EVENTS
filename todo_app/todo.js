// Targeting the root element where the todos will append
let root = document.querySelector('ul');

// Targeting the input element where the input value
let input = document.querySelector('#text');

// Targeting the input element where the input value
let submit = document.querySelector('button');

let allTodos =
  JSON.parse(localStorage.getItem('todos', JSON.stringify('todos'))) || [];

//event on submit
submit.addEventListener('click', handleInput);

// event on input
input.addEventListener('keydown', handleInput);

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== '') {
    let newTodo = { name: value, isDone: false };
    allTodos.push(newTodo);
    event.target.value = '';
    createUI(allTodos);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    console.log(allTodos);
  }
}

// function createUI
function createUI(allTodos) {
  root.innerHTML = '';
  allTodos.forEach((todo, index) => {
    let li = document.createElement('li');
    li.classList.add('flex');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', 'checkbox');
    checkBox.setAttribute('data-checkid', index);
    checkBox.checked = todo.isDone;
    // event on checkbox
    checkBox.addEventListener('input', handleCheckBox);

    let inputList = document.createElement('input');
    inputList.setAttribute('type', 'text');
    inputList.setAttribute('id', 'text');
    inputList.value = todo.name;
    if (todo.isDone) {
      inputList.style.textDecoration = 'line-through';
      inputList.style.color = '#6c1414';
    }
    //event on inputList
    inputList.addEventListener('input', handleInputlist);

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa-solid', 'fa-xmark');
    deleteBtn.setAttribute('data-id', index);
    // even on deleteBtn
    deleteBtn.addEventListener('click', handleClickDelete);
    li.append(checkBox, inputList, deleteBtn);
    root.prepend(li);

    // function handleCheckBox
    function handleCheckBox(event) {
      let id = event.target.dataset.checkid;
      if (event.target.checked && id) {
        allTodos[id].isDone = true;
        inputList.style.textDecoration = 'line-through';
        inputList.style.color = '#6c1414';
        localStorage.setItem('todos', JSON.stringify(allTodos));
      } else {
        allTodos[id].isDone = false;
        inputList.style.textDecoration = 'none';
        inputList.style.color = 'white';
      }
      localStorage.setItem('todos', JSON.stringify(allTodos));
    }
    //function handleInputlist
    function handleInputlist(event, index) {
      // function handleInputlist
      function handleInputlist(event, index) {
        console.log('index:', index);
        console.log('allTodos:', allTodos);

        // Check if allTodos[index] is defined before updating the 'name' property
        if (allTodos[index]) {
          allTodos[index].name = event.target.valu  e;
          localStorage.setItem('todos', JSON.stringify(allTodos));
          createUI(allTodos);
        }
      }
    }
    // function handleClick
    function handleClickDelete() {
      allTodos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(allTodos));
      createUI(allTodos);
    }
  });
}

createUI(allTodos);
