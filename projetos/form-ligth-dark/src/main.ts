import './style.css'

import { camposValidacao } from './service/camposValidadcao';
import { darkMode } from './service/darkMode';
import { limparForm } from './service/limparForm';
import { responsePost } from './routes/usuarios.routes';
import { sidebarButtons } from './service/sidebar';

const btnDark = document.querySelector(".btn-dark") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;

// Capiturando os dados do formulário, e criando um usuário na api
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Recebe todos os dados do fromulário e tranforma em um objeto
    const dadosFormulario = new FormData(form);

    // dadosFormulario.entries() - coleta os pares chave-valor dos campos do formulário
    // Object.formEntries() - transforma esses pares chave-valor em um objeto normal
    const dados = Object.fromEntries(dadosFormulario.entries());

    const valid = camposValidacao(dados, form);

    if (!valid) return;

    const res = await responsePost(dados); // retorna um promise response

    if (res.ok) {
        alert('usuário salvo com sucesso');
        let erroExist = form.querySelectorAll('p');
        limparForm(form, erroExist);
        return;
    }

    return alert('Erro ao salvar usuário');
});

// Estilização Dark Mode
btnDark.addEventListener('click', () => {
    darkMode(form, btnDark);
});

// Menu lateral esquerdo
sidebarButtons();