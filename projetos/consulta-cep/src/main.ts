import './style.css'

import type { Estado } from './interface/Estado';
import type { Cep } from './interface/CepType';
import { cidadeEstadoOrdenado, criarOptionElement, limparForm } from './utils/helpers';
import { consultarCep } from './service/cepService';

const cep = document.getElementById('cep') as HTMLInputElement;
const cidadeSelect = document.getElementById('cidade') as HTMLSelectElement;
const estadoSelect = document.getElementById('estado') as HTMLSelectElement;
const erroMessage = document.querySelector('.erro') as HTMLDivElement;

cep.addEventListener('blur', async () => {
  const cepValue = cep.value.trim();

  // Evita que a menssagem de erro multiplique a cada atualizada
  erroMessage.innerHTML = ""

  // Validando o cep
  if (!cepValue || cepValue.length !== 8) {
    const error = document.createElement('p');
    error.innerHTML = "<p>CEP inválido.</P>";
    erroMessage.appendChild(error);
    
    return limparForm();
  }

  // Remove o erro
  erroMessage.innerHTML = ""

  consultarCep();
});

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
  .then(res => res.json())
  .then((estados: Estado[]) => {
    // Ordena os estados por ordem alfabética
    const estadoOrdenano = cidadeEstadoOrdenado(estados)

    estadoOrdenano.forEach((estado) => {
      criarOptionElement(estado, estadoSelect);
    });
  });

estadoSelect.addEventListener('change', () => {
  const estadoSigla = estadoSelect.value;
  cidadeSelect.innerHTML = "<option>...</option>";
  cidadeSelect.disabled = true;

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSigla}/municipios`)
    .then(res => res.json())
    .then(cidades => {
      cidadeSelect.innerHTML = "<option>Selecione uma cidade</option>"

      const cidadeOrdenada = cidadeEstadoOrdenado(cidades)

      cidadeOrdenada.forEach((cidade: Cep) => {
        criarOptionElement(cidade, cidadeSelect)
      });

      cidadeSelect.disabled = false;
    });
});