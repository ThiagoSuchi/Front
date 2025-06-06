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
    const background = data[0].background;
    if (background.tipo === 'imagem') {
      const blurBg = document.createElement('div');
      blurBg.style.position = 'fixed';
      blurBg.style.top = '0';
      blurBg.style.left = '0';
      blurBg.style.width = '100vw';
      blurBg.style.height = '100vh';
      blurBg.style.zIndex = '-1';
      blurBg.style.backgroundImage = `url(${data[0].background.valor})`;
      blurBg.style.backgroundSize = 'cover';
      blurBg.style.backgroundPosition = 'center';
      blurBg.style.filter = `blur(${data[0].background.blur || '5px'})`;
      document.body.appendChild(blurBg);
      
      document.body.style.backgroundImage = `url(${background.valor})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      document.body.style.background = background.valor;
    }

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
