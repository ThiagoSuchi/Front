import type { UserProfile } from './models/interfacesUser';
import { createLinktree, styleLinks } from './services/criarLinktree';
import './style.css';

const params = new URLSearchParams(window.location.search);


const id = params.get("id");

fetch(`http://localhost:3000/usuarios?id=${id}`)
  .then(res => res.json())
  .then(data => {
    // Percorri todos os usuários e apliquei suas respectivas estilizações
    (data as UserProfile[]).forEach((user: UserProfile) => {
      createLinktree(user);
      styleLinks(user)
    })

    // Aplica o background do usuário dinamicamente no body
    document.body.style.background = data[0].background.valor;

    // Se houver animação definida no JSON, injeta o @keyframes no <head> e aplica a animação no body
    if (data[0].background.keyframes) {
      if (!document.getElementById('dynamic-keyframes')) {
        const style = document.createElement('style');
        style.id = 'dynamic-keyframes';
        style.innerHTML = data[0].background.keyframes;
        document.head.appendChild(style);
      }
      document.body.style.animation = data[0].background.animation;
    } else {
      // Irá remover a animação se não houver keyframes
      document.body.style.animation = "";
    }
  })
