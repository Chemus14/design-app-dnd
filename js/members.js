'use strict';

// Assume you have an array of members
const members = [
  { name: 'Jose', avatar: 'avatar1.jpg' },
  { name: 'Joanna', avatar: 'avatar2.jpg' },
  { name: 'Edgar', avatar: 'avatar3.jpg' },
  { name: 'Maria', avatar: 'avatar4.png' },
  { name: 'Luis', avatar: 'avatar5.png' },
  { name: 'Pedro', avatar: 'avatar5.png' },
  { name: 'Barbara', avatar: 'avatar1.jpg' },
  { name: 'Pepe', avatar: 'avatar2.jpg' },
  { name: 'Antonio', avatar: 'avatar3.jpg' },
  { name: 'Luisa', avatar: 'avatar4.png' },
  { name: 'Member 1', avatar: 'avatar5.png' },
  { name: 'Member 1', avatar: 'avatar2.jpg' },
  { name: 'Member 1', avatar: 'avatar1.jpg' },
  { name: 'Member 1', avatar: 'avatar3.jpg' },
  { name: 'Member 1', avatar: 'avatar5.png' },
  // Add more members as needed
];
const memberContainer = document.querySelector('.members-container');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let startIndex = 0;
const membersPerPage = 10;

function displayMembers() {
  memberContainer.innerHTML = '';
  for (
    let i = startIndex;
    i < startIndex + membersPerPage && i < members.length;
    i++
  ) {
    const member = members[i];
    const memberElement = document.createElement('div');
    memberElement.classList.add('member');
    memberElement.innerHTML = `
      <img src="imgs/${member.avatar}" alt="${member.name}">
      <span>${member.name}</span>
    `;
    memberContainer.appendChild(memberElement);
  }
}

function navigateRight() {
  if (startIndex + membersPerPage < members.length) {
    startIndex += membersPerPage;
    displayMembers();
  }
}

function navigateLeft() {
  if (startIndex - membersPerPage >= 0) {
    startIndex -= membersPerPage;
    displayMembers();
  }
}

arrowRight.addEventListener('click', navigateRight);
arrowLeft.addEventListener('click', navigateLeft);

// Initial display
displayMembers();
