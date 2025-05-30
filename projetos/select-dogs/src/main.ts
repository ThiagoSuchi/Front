import './style.css'

const dogSelect = document.getElementById('dog') as HTMLSelectElement;
const btnDog = document.getElementById('btn-dog') as HTMLButtonElement;

btnDog.addEventListener('click', () => {

  dogs()
})

async function dogs() {
  fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
    .then(res => res.json())
    .then(dogs => {
      const dogImage = dogs
      console.log(dogs);
      
      const optionDog = document.createElement('option');
      optionDog.innerHTML = dogImage
      dogSelect.appendChild(optionDog)
    })
}