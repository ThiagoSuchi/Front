import { z } from "zod";

export const formSchema = z.object({
    nome: z.string()
        .nonempty("O campo nome é obrigatório.")
        .min(4, "O nome deve conter no mínimo 4 caracteres."),

    email: z.string()
        .nonempty("O campo email é obrigatório.")
        .email("O email fornecido é inválido. Exemplo de email válido: exemple@gmail.com"),

    sexo: z.enum(["masculino", "feminino"], {
        errorMap: () => ({ message: "O campo sexo é obrigátorio." })
    }),
    
    termos: z.literal(true, {
        errorMap: () => ({ message: "Você deve aceitar os termos de serviço." })
    })
})