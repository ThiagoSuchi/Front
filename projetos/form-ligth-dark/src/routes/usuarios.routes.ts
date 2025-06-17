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
    await fetch('http://localhost:3000/usuarios')
        .then(res => res.json())
        .then(users => {
            console.log("Usuários >> " + JSON.stringify(users, null, 2));  
        })
        .catch(err => console.log("Erro ao buscar usuários", err));
}


export { responseGet, responsePost };