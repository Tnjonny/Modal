'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
const btnNightMode = document.querySelector('.bcolor');
const btnLightMode = document.querySelector('.lcolor');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const NightMode = function () {
  document.body.style.background = 'black';
};

const LightMode = function () {
  document.body.style.background = 'grey';
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('.hidden')) {
    closeModal();
  }
});

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnNightMode.addEventListener('click', NightMode);
btnLightMode.addEventListener('click', LightMode);
