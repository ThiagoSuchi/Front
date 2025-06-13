import { formSchema } from "../validations/validationSchema";

export function camposValidacao(dados: object, form: HTMLFormElement) {
    let dadosValidados = formSchema.safeParse(dados);
    let validCamp = true;

    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        if (!dadosValidados.success) {
            const divCampos = input.parentElement as HTMLDivElement; // aponta para o pai do elemento input
            const erroExist = divCampos.querySelector('p');// Selecionei todos os paragráfos da div

            if (erroExist) {
                divCampos.removeChild(erroExist);// Limpando erro anterior
            }
            
            const p = document.createElement('p');
            p.innerHTML =
                dadosValidados.error.errors
                    .filter(err => err.path[0] === input.id)// Filtra o campo que esta gerando o erro 
                    .map(err => err.message)
                    .join('<br>');

            p.style.color = "red";

            divCampos.appendChild(p);
            validCamp = false;
        }
    });

    return validCamp;
}
