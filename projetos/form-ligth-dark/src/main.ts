import './style.css'

const btnDark = document.querySelector(".btn-dark") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;
const body = document.body;

// Capiturando os dados do formulário, e criando um usuário na api
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Recebe todos os dados do fromulário e tranforma em um objeto
    const dadosFormulario = new FormData(form);

    // Object.formEntries() - transforma esses pares chave-valor em um objeto normal
    // dadosFormulario.entries() - coleta os pares chave-valor dos campos do formulário
    const dados = Object.fromEntries(dadosFormulario.entries());

    const res = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'// Diz ao servidor que irei enviar JSON
        },
        body: JSON.stringify(dados)// Converte em uma string json
    });

    if (res.ok) {
        alert('usuário salvo com sucesso');
        form.reset()
        return
    }

    return alert('Erro ao salvar usuário')
});

// Estilização Dark Mode
btnDark.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    form.classList.toggle('dark');

    if (isDark) {
        btnDark.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 8C11.4984 8.5362 11.2249 9.24634 11.2371 9.98047C11.2493 10.7146 11.5464 11.4152 12.0656 11.9344C12.5848 12.4536 13.2854 12.7507 14.0195 12.7629C14.7537 12.7751 15.4638 12.5016 16 12C16 12.7911 15.7654 13.5645 15.3259 14.2223C14.8864 14.8801 14.2616 15.3928 13.5307 15.6955C12.7998 15.9983 11.9956 16.0775 11.2196 15.9231C10.4437 15.7688 9.73098 15.3878 9.17157 14.8284C8.61216 14.269 8.2312 13.5563 8.07686 12.7804C7.92252 12.0044 8.00173 11.2002 8.30448 10.4693C8.60723 9.73836 9.11993 9.11365 9.77772 8.67412C10.4355 8.2346 11.2089 8 12 8Z" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 2V4" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 20V22" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.8999 4.9L6.2999 6.3" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.7 17.7L19.1 19.1" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 12H4" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20 12H22" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6.2999 17.7L4.8999 19.1" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.1 4.9L17.7 6.3" stroke="#FCFDFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    } else {
        btnDark.innerHTML = `<svg id="icone" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20 3V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22 5H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>`
    }
});