const STORAGE_KEY = 'todo-list';
const todoList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let lastId = todoList.length > 0 ? todoList[todoList.length -1].id + 1 : 0;

const formElement = document.forms[0];
const listElement =  document.getElementsByTagName('ul')[0];

formElement.addEventListener('submit', function(event){
  event.preventDefault();
  const newItemText = document.forms[0].title.value;
  addItem(newItemText);
  document.forms[0].title.value = '';
});


todoList.forEach(createItem);

function createCheckbox(item){
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  if(item.done){
    checkbox.disabled = true;
    checkbox.checked = true;
  } else {
    checkbox.addEventListener('input', function(){
      finishItem(item.id);
      this.disabled = true;
    });
  }

  return checkbox;
}

function createRemoveButton(item){
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-close ml-2';
  button.addEventListener('click', function(){
    removeItem(item.id);
    document.getElementById(`list-item-${item.id}`).remove();
  });

  return button;
}


function createItem(item){
  const listItem = document.createElement('li');
  listItem.id = `list-item-${item.id}`;
  listItem.innerHTML =`<div class="d-flex align-items-center"><span class="me-2">${item.text}</span></div>`;

  listItem.firstChild.append(createCheckbox(item));
  listItem.firstChild.append(createRemoveButton(item));

  listElement.append(listItem);
}

function addItem(text){
  const id = lastId++;
  const item = {text, id, done: false};
  todoList.push(item);
  createItem(item);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
}

function removeItem(id){
  const indexToRemove = todoList.findIndex(function(item){
    return item.id == id;
  });
  todoList.splice(indexToRemove, 1);
  saveToStorage();
}

function finishItem(id){
  const element = todoList.find(function(item){
    return item.id == id;
  });
  element.done = true;
  saveToStorage();
}
