import { z } from 'zod'
import type { DBase } from '../../types/db.type'
import { bedroomCreateSchema, bedroomUpdateSchema } from './bedroom.schema'

export type BedroomCreate = z.infer<typeof bedroomCreateSchema>

export type Bedroom = BedroomCreate & DBase

export type BedroomUpdate = z.infer<typeof bedroomUpdateSchema>
