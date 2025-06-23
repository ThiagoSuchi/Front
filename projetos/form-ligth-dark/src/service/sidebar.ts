import { responseGet } from "../routes/usuarios.routes";

const btnForm = document.querySelector('.btn-form') as HTMLButtonElement;
const btnList = document.querySelector('.btn-list') as HTMLButtonElement;

export async function sidebarButtons(): Promise<void> {
    const form = document.querySelector('.formulario') as HTMLSelectElement;
    const lista = document.querySelector('.lista') as HTMLSelectElement;

    // mantém por padrão o botão formulário com focus
    btnForm.classList.add('active');

    btnForm.addEventListener('click', () => {
        btnList.classList.remove('active');
        btnForm.classList.add('active');

        form.style.display = 'block';
        lista.style.display = 'none'
    })

    btnList.addEventListener('click', async () => {
        btnForm.classList.remove('active');
        btnList.classList.add('active');

        form.style.display = 'none';
        lista.style.display = 'grid';

        const usuarios = await responseGet()

        lista.innerHTML = usuarios.map((user: any) => `
            <div class="card">
                <h3>${user.nome}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Sexo:</strong> ${user.sexo}</p>
                <p><strong>Curso:</strong> ${user.curso}</p>
                <p><strong>Mensagem:</strong> ${user.mensagem}</p>
            </div>
        `).join('');
    })
};