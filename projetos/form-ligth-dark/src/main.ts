import './style.css'

import { camposValidacao } from './service/camposValidadcao';
import { darkMode } from './service/darkMode';

const btnDark = document.querySelector(".btn-dark") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;

// Capiturando os dados do formulário, e criando um usuário na api
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Recebe todos os dados do fromulário e tranforma em um objeto
    const dadosFormulario = new FormData(form);

    // Object.formEntries() - transforma esses pares chave-valor em um objeto normal
    // dadosFormulario.entries() - coleta os pares chave-valor dos campos do formulário
    const dados = Object.fromEntries(dadosFormulario.entries());

    const valid = camposValidacao(dados, form);

    if (!valid) return;

    const res = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'// Diz ao servidor que irei enviar JSON
        },
        body: JSON.stringify(dados)// Converte em uma string json
    });

    if (res.ok) {
        alert('usuário salvo com sucesso');
        form.reset();
        return;
    }

    return alert('Erro ao salvar usuário');
});

// Estilização Dark Mode
btnDark.addEventListener('click', () => {
    darkMode(form, btnDark);
});