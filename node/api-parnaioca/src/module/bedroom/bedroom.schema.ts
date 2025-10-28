import { z } from "zod";

export const bedroomCreateSchema = z.object({
  userId: z.string({
    error: 'O campo usuário precisa ser do tipo texto'
  }).trim().optional(),
  bedroom: z.number({
    error: 'O campo quarto precisa ser do tipo número'
  }),
  active: z.boolean({
    error: 'O campo ativo precisa ser do tipo booleano'
  }).default(true),
  start: z.string({
    error: 'O campo entrada precisa ser do tipo data'
  }).optional(),
  end: z.string({
    error: 'O campo saída precisa ser do tipo data'
  }).optional(),
})

export const bedroomUpdateSchema = bedroomCreateSchema.partial()