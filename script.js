'use strict';
const btnOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
const keyToClose = function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', keyToClose);