import './style.css'
import type { Pessoa } from './models/Pessoa.ts';
import { limparInput } from './utils/limparInput.ts';
import { sicronizar } from './utils/sincronizar.ts';

const nome = document.querySelector('#nome') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement
const form = document.querySelector('#form') as HTMLInputElement;

const formPessoas: Pessoa[] = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const pessoa: Pessoa = {
    nome: nome.value,
    email: email.value,
    date: new Date().toLocaleDateString(),
  }
  
  formPessoas.push(pessoa);
  sicronizar(formPessoas);
  limparInput(nome, email);
})