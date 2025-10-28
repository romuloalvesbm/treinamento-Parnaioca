import { z } from "zod";

export const userCreateSchema = z.object({
  name: z.string({
    error: 'O campo nome precisa ser do tipo texto'
  }).trim().max(18, {
    error: 'O máximo de caracteres para o campo nome é 18'
  }), // Richardcleisuellen
  email: z.email({
    error: 'O campo e-mail tem que possuir um e-mail válido'
  }).trim(), // teste1@teste.com
  password: z.string({
    error: 'O campo senha precisa ser do tipo texto'
  }).trim().min(5, {
    error: 'O mínimo de caracteres para o campo senha é 5'
  }), // teste123
  isAdmin: z.boolean({
    error: 'O campo isAdmin precisa ser do tipo booleano'
  }).default(false)
})

export const userUpdateSchema = userCreateSchema.partial()