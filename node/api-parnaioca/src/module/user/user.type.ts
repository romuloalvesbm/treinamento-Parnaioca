import { z } from 'zod'
import type { DBase } from '../../types/db.type'
import { userCreateSchema, userUpdateSchema } from './user.schema'

export type UserCreate = z.infer<typeof userCreateSchema>

export type User = UserCreate & DBase

export type UserUpdate = z.infer<typeof userUpdateSchema>
