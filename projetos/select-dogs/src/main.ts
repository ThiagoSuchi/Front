import './style.css'

const animalSelect = document.getElementById('dog') as HTMLSelectElement;
const btnDog = document.getElementById('btn-dog') as HTMLButtonElement;
const imgDog = document.querySelector('.dogs') as HTMLDivElement;

btnDog.addEventListener('click', () => {
  if (animalSelect.value === 'DOG') return dogs();
  if (animalSelect.value === 'CAT') return cats();
})

async function dogs() {
  fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
    .then(res => res.json())
    .then(dogs => {
      const imageUrl = dogs[0].url
      imgDog.style.backgroundImage = `url('${imageUrl}')`
    })
}

async function cats() {
  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
    .then(res => res.json())
    .then(cats => {
      const imageUrl = cats[0].url
      imgDog.style.backgroundImage = `url('${imageUrl}')`
    })
}