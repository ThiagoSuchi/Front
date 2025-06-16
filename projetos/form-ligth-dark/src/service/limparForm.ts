export function limparForm(form: HTMLFormElement ,erroExist: NodeListOf<HTMLParagraphElement>): void {
    if (erroExist) {
        erroExist.forEach(erro => {
            erro.innerHTML = '';
        })
    }

    form.reset();
}