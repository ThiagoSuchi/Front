import './style.css'

const hamburg = document.querySelector('.hamburg') as HTMLDivElement;
const lista = document.querySelector('.lista') as HTMLLIElement;

hamburg.addEventListener('click', () => {
  hamburg.classList.toggle('show');

  if (hamburg.classList.contains('show')) {
    hamburg.style.background = 'black'
  } else {
    hamburg.style.background = 'transparent'
  }
})