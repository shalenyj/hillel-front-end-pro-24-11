import TICKETS from './tickets.js';

const cardsContainer = document.getElementById('cards');
const modalElement = document.getElementById('card-details');
const closeButton = document.getElementById('close-modal');

const toggleModal = () => {
  modalElement.style.display = modalElement.style.display === 'block' ? 'none' : 'block';
};

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
  toggleModal();
};

const addCard = card => {
  const cardElement = document.createElement('div');
  cardElement.dataset.index = card.index;
  cardElement.className = 'card';

  cardsContainer.appendChild(cardElement);
};

closeButton.addEventListener('click', toggleModal);
cardsContainer.addEventListener('click', handleCardClick);


const items = TICKETS.map(({ title, description}, index) => ({
  title,
  description,
  disabled: false, 
  index
}));

items.forEach(addCard);
