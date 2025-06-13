import { z } from "zod";

export const formSchema = z.object({
    nome: z.string()
    .min(4, "O nome deve conter no mínimo 4 caracteres.")
    .nonempty("O campo nome é obrigatório."),

    email: z.string()
    .email("O email fornecido é inválido. Exemplo de email válido: exemple@gmail.com")
    .nonempty("O campo email é obrigatório.")
})