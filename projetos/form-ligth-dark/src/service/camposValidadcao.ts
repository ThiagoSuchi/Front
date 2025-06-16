import { formSchema } from "../validations/validationSchema";

export function camposValidacao(dados: object, form: HTMLFormElement) {
    let dadosValidados = formSchema.safeParse(dados);
    let validCamp = true;

    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        if (!dadosValidados.success) {
            const divCampos = input.parentElement as HTMLDivElement; // aponta para o pai do elemento input
            const erroExist = divCampos.querySelector('p');// Selecionei todos os paragráfos da div

            // Limpando erro anterior: 
            // evita repetições de erros, pois a cada submetida do form, mesmo já havendo um erro, era criado outro logo em baixo baixo
            if (erroExist) {
                divCampos.removeChild(erroExist);
            }

            const p = document.createElement('p');
            
            // Filtra qual erro deve aparecer, se o erro existir
            const mesageErro = dadosValidados.error.errors.find(err => err.path[0] === input.name);
            if (mesageErro) {
                p.innerHTML = mesageErro.message;
                p.style.color = "red";
            }

            divCampos.appendChild(p);
            validCamp = false;            
        }
    });

    return validCamp;
}
