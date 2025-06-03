import './style.css';

const params = new URLSearchParams(window.location.search);

const app = document.querySelector("#app")! as HTMLDivElement;
const id = params.get("id");

fetch(`http://localhost:3000/usuarios?id=${id}`)
  .then(res => res.json())
  .then(data => {
    app.innerHTML = `Olá, usuário ${data[0].nome}`;
  })
