// créer un module pour faire une fiche avec : title, description, dueDate and priority.
// créer un module pour faire un projet
import createCard from './modules/card.js';

//createCard("un titre", "plouf une description !");
const addTaskButton = document.getElementById('addTask');
const overlay = document.getElementById('overlay');
const addTaskForm = document.getElementById('add-task-form');
const cancelAddTaskButton = document.getElementById('cancel-add-task');
const addCardButton = document.getElementById('add-card-button');
const cards = document.querySelector('.cards');

addTaskButton.addEventListener('click', () => {
  overlay.classList.add('blur');
  overlay.style.display = "block";
  addTaskForm.style.display = 'block';
});

addCardButton.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.remove('blur');
  overlay.style.display = 'none';
  addTaskForm.style.display = 'none';
  cards.appendChild(createCard());
});

cancelAddTaskButton.addEventListener('click', () => {
  overlay.classList.remove('blur');
  overlay.style.display = 'none';
  addTaskForm.style.display = 'none';
});