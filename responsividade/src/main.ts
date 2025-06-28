import './style.css'

const hamburg = document.querySelector('.hamburg') as HTMLDivElement;
const sidebar = document.querySelector('.sidebar') as HTMLUListElement;

hamburg.addEventListener('click', () => {
  hamburg.classList.toggle('show');
  sidebar.classList.toggle('show');
})