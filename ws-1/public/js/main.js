import config from './config.js'
import { createOrder, getOrders, deleteOrder } from './api.js';

const ulElement = document.querySelector('ul');
const formElement = document.forms[0];
const button = document.getElementById('show-order');
const table = document.querySelector('table')

const createDeleteButton = id => {
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.addEventListener('click', async() => {
    await deleteOrder(id)
    button.parentNode.remove()
  })
  return button
}

const showOrders = async() => {
  const childrenLength = table.children.length;
  for(let i=1; i < childrenLength; i++){
    table.lastElementChild.remove()
  }

  const orders = await getOrders();

  orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${order.name}</td>
      <td>${order.quantity}</td>
      <td>${order.deliverTo}</td>`;
    const button = createDeleteButton(order._id)
    row.append(button)
    table.append(row)
  })
  table.style.display = 'table';
}

button.addEventListener('click', showOrders)

formElement.addEventListener('submit', async(event) => {
  event.preventDefault();
  const data = {
    name: formElement.name.value,
    quantity: formElement.quantity.value,
    deliverTo: formElement.deliverTo.value,
  };
  await createOrder(data);
  formElement.name.value = '';
  formElement.quantity.value = 0;
  formElement.deliverTo.value = '';
  formElement.style.display = 'none';
  alert('Bought')
})

const createMenuItem = name => {
  const liElement = document.createElement('li');
  liElement.innerText = name;
  return liElement
}

const showBuyForm = item => {
  formElement.style.display = 'block';
  formElement.firstElementChild.innerText = `You wanna buy: ${item.name} with price $${item.price}`;
  formElement.name.value = item.name;
}

const createItems = items => {
  const previousList = document.getElementById('items');
  if(previousList){
    previousList.remove()
  }
  const listOfItems = document.createElement('ul');
  listOfItems.id = 'items';

  items.forEach(item => {
    const stringToDisplay = `${item.name}: $${item.price}`
    const element = createMenuItem(stringToDisplay)
    element.addEventListener('click', () => {
      showBuyForm(item)
    })
    listOfItems.append(element)
  });
  ulElement.parentNode.append(listOfItems)
}

const handleMenuClick = event => {
  const category = event.target.innerHTML;
  const items = config[category];
  createItems(items)
}

for(const key in config){
  const liElement = createMenuItem(key);
  liElement.addEventListener('click', handleMenuClick)
  ulElement.append(liElement)
}