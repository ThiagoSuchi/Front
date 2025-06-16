import { z } from "zod";

export const formSchema = z.object({
    nome: z.string().nonempty("O campo nome é obrigatório.").min(4, "O nome deve conter no mínimo 4 caracteres."),
    email: z.string().nonempty("O campo email é obrigatório.").email("O email fornecido é inválido. Exemplo de email válido: exemple@gmail.com"),
    sexo: z.enum(["masculino", "feminino"], {
        required_error: "O campo sexo é obrigatório.",
    }),
    termos: z
        .string()
        .optional() // evita o erro Required, que viria do Zod diretamente.
        .transform((val) => val === "on")
        .refine((val) => val === true, {
            message: "Você deve aceitar os termos de serviço.",
        }),
})