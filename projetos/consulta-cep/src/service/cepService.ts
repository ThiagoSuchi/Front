const cep = document.getElementById('cep') as HTMLInputElement;
const logradouro = document.getElementById('logradouro') as HTMLInputElement;
const numero = document.getElementById('numero') as HTMLInputElement;
const bairro = document.getElementById('bairro') as HTMLInputElement;

export async function consultarCep() {
  const result = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`);
  const body = await result.json();

  numero.focus()
  logradouro.value = body.street;
  bairro.value = body.neighborhood;
}