import './style.css'

const cep = document.querySelector('#cep') as HTMLInputElement;
const logradouro = document.querySelector('#logradouro') as HTMLInputElement;
const numero = document.querySelector('#numero') as HTMLInputElement;
const bairro = document.querySelector('#bairro') as HTMLInputElement;
const cidade = document.querySelector('#cidade') as HTMLInputElement;
const estado = document.querySelector('#estado') as HTMLInputElement;

cep.addEventListener('blur', async () => {
  consultarCep();
})

function limparForm() {
  logradouro.value = "";
  bairro.value = "";
  cidade.value = "";
  estado.value = ""
}

async function consultarCep() {
  const result = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`);
  const body = await result.json();
  limparForm()
  numero.focus()
  logradouro.value = body.street;
  bairro.value = body.neighborhood;
  cidade.value = body.city;
  estado.value = body.state;
}