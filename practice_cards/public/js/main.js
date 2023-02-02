import { getLectionLength, getTickets } from './api.js';
import { toggleDisplay  } from './utils.js';

const navigationElement = document.getElementsByTagName('nav')[0];
const cardsContainer = document.getElementById('cards');
const modalElement = document.getElementById('card-details');
const closeButton = document.getElementById('close-modal');

let items = [];

const getLections = async() => {
  const {lessonsCount} = await getLectionLength();
  for(let i=0; i< lessonsCount; i++){
    const navChild = document.createElement('span');
    const id = i + 1;
    navChild.innerText = `Lesson ${id}`;
    navChild.dataset.id = id;
    navigationElement.append(navChild);
  }
};

const getLessonTickets = async(id) => {
  const { tickets } = await getTickets(id);
  items = tickets.map(({ title, description}, index) => ({
    title,
    description,
    disabled: false, 
    index,
    sort: Math.random()
  }))
    .sort((a, b) => a.sort - b.sort);
  cardsContainer.innerHTML = '';
  items.forEach(addCard);

};

navigationElement.addEventListener('click', event => {
  const { id } = event.target.dataset;
  if(id){
    getLessonTickets(id);
  } 
});


const handleCardClick = event => {
  if(!event.target.dataset.index && !event.target.parentNode.dataset.index){
    return;
  }

  const index = event.target.dataset.index || event.target.parentNode.dataset.index;
  const activeElement = items[index];
  if(activeElement.disabled){
    return;
  }

  activeElement.disabled = true;
  const target = event.target.dataset.index ? event.target : event.target.parentNode;
  target.classList.add('disabled');
  
  showModal(activeElement);
};

const showModal = activeElement => {
  modalElement.querySelector('.modal-title').innerText = activeElement.title;
  modalElement.querySelector('.modal-description').innerText = activeElement.description;
  toggleDisplay(modalElement);
};

const addCard = card => {
  const cardElement = document.createElement('div');
  cardElement.dataset.index = card.index;
  cardElement.className = 'card';

  cardsContainer.appendChild(cardElement);
};

closeButton.addEventListener('click', () => toggleDisplay(modalElement));
cardsContainer.addEventListener('click', handleCardClick);

getLections();
