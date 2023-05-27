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
