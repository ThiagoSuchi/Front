import type { UserProfile } from "../models/interfacesUser";

const links = document.querySelector('.links') as HTMLDivElement;
const person = document.querySelector(".person")! as HTMLDivElement;

function createLinktree(data: UserProfile): void {
    person.innerHTML = `
      <img src="${data.foto_URL}">
      <h2 class="name">${data.nome}</h2>
    `;
    const name = person.querySelector('.name') as HTMLHeadingElement;
    name.style.color = data.link.texto;

    links.innerHTML = `
        <ul>
            ${data.links.map(link => `
                <li class="link-item">
                    <img src="${link.icone}" alt="${link.texto}">${link.texto}
                </li>
            `).join('')}
        </ul>
    `;
}

function styleLinks(data: UserProfile) {
    // Aplica o efeito hover isoladamente em cada li
    const linksItem = document.querySelectorAll('.link-item');
    linksItem.forEach((link, i) => {
      (link as HTMLDivElement).style.background = data.link.cor;
      (link as HTMLDivElement).style.color = data.link.texto;
      (link as HTMLDivElement).style.borderRadius = data.border_radius;

      link.addEventListener('click', () => {
        window.open(data.links[i].url, '_blank');
      })

      link.addEventListener('mouseenter', () => {
        (link as HTMLDivElement).style.background = data.link.hover;
        (link as HTMLDivElement).style.color = data.link.texto;
        (link as HTMLDivElement).style.border = `1px solid ${data.link.texto}`;
      });
      link.addEventListener('mouseleave', () => {
        (link as HTMLDivElement).style.background = data.link.cor;
        (link as HTMLDivElement).style.color = data.link.texto;
        (link as HTMLDivElement).style.border = "1px solid transparent";
      });
    });
}

export { createLinktree, styleLinks};