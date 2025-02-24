import * as zod from 'zod';

export const FormSchema = zod.object({
  name: zod
    .string({ required_error: 'Nome é obrigatório' })
    .min(3, `Nome deve ter no mínimo 3 caracteres`),
  email: zod
    .string({ required_error: 'Email é obrigatório' })
    .email({ message: 'Email inválido' }),
  number: zod
    .string({ required_error: 'Número é obrigatório' })
    .min(11, 'O número deve conter o DDD'),
  message: zod
    .string()
    .min(10, 'A mensagem deve ter no mínimo 10 caracteres')
    .max(200, 'Mensagem deve ter no máximo 200 caracteres'),
});

export type FormSchemaType = zod.infer<typeof FormSchema>;
