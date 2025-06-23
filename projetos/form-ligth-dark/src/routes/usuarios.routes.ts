async function responsePost(dados: object): Promise<Response> {
    return fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'// Diz ao servidor que irei enviar JSON
        },
        body: JSON.stringify(dados)// Converte em uma string json
    });
}

async function responseGet() {
    try {
        const res= fetch('http://localhost:3000/usuarios')
        const users = (await res).json();

        return users
    } catch (err) {
        console.log("Erro ao buscar usuários: ", err);
    }
}


export { responseGet, responsePost };