// Targeting the root element where the todos will append
const root = document.querySelector('.main-container');
console.log(root);

// Targeting the input element where the input value
const input = document.querySelector('#text');
console.log(input);

const allTodo = [];

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13 && e.target.value) {
    const newTodo = { text: e.target.value, isDone: false };
    allTodo.push(newTodo);
    e.target.value = '';
    createUI(allTodo);
  }
});

// createUI;
const createUI = (allTodo) => {
  root.innerHTML = '';
  allTodo.forEach((todo, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.setAttribute('value', todo.text);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const span = document.createElement('span');
    span.innerText = '❌';
    span.setAttribute('data-id', index);
    li.append(checkbox, input, span);
    span.addEventListener('click', handleDelete);
    root.append(li);
  });
};

const handleDelete = (id) => {
  root.splice('data-id', 1);
};
const handleCheck = () => {};
