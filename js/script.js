'use strict';

const modal = document.getElementById('myModal');
const modalLink = document.querySelector('.modal-link');
const closeBtn = document.querySelector('.close');

// Open the modal when the anchor is clicked
modalLink.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Modal sign up

const modalSignUp = document.getElementById('myModalSignUp');
const signUpLink = document.querySelector('.fa-user-plus');
const closeBtnSignUp = modalSignUp.querySelector('.close');

// Open the modal when the sign up link is clicked
signUpLink.addEventListener('click', (event) => {
  event.preventDefault();
  modalSignUp.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtnSignUp.addEventListener('click', () => {
  modalSignUp.style.display = 'none';
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modalSignUp) {
    modalSignUp.style.display = 'none';
  }
});
