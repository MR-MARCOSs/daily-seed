import { z } from 'zod';

export const CreateVerseSchema = z.object({
  text: z.string().min(10, 'Texto deve ter pelo menos 10 caracteres').max(500, 'Texto deve ter no máximo 500 caracteres'),
  reference: z.string().min(3, 'Referência é obrigatória').max(40, 'Referência deve ter no máximo 40 caracteres'),
  lesson: z.string().min(20, 'Lição deve ter pelo menos 20 caracteres').max(1500, 'Lição deve ter no máximo 1500 caracteres')
});

export type CreateVerseDto = z.infer<typeof CreateVerseSchema>;