import type { Pessoa } from "../models/Pessoa";

export function sicronizar(listaDePessoas: Pessoa[]): void {
    const pessoasExistentes = JSON.parse(localStorage.getItem("listaDePessoas") || "[]");
    const pessoasAtualizadas = [...pessoasExistentes, ...listaDePessoas];
    const pessoasString = JSON.stringify(pessoasAtualizadas);
    localStorage.setItem("listaDePessoas", pessoasString);
}