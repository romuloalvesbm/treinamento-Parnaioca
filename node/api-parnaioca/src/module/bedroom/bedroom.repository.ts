import type { Bedroom, BedroomCreate, BedroomUpdate } from "./bedroom.type";
import { bedroomModel } from './bedroom.model'

const getAll = async (): Promise<Bedroom[] | []> => {
  return await bedroomModel.find().lean().populate('userId')
}

const getById = async (_id: string): Promise<Bedroom | null> => {
  return await bedroomModel.findById(_id).lean()
}

const getByEmail = async (email: string): Promise<Bedroom | null> => {
  return await bedroomModel.findOne({ email }).lean()
}

const save = async (params: BedroomCreate): Promise<Bedroom> => {
  return await bedroomModel.create(params)
}

const update = async (_id: string, params: BedroomUpdate): Promise<Bedroom | null> => {
  return await bedroomModel.findOneAndUpdate({ _id }, params).lean()
}

const destroy = async (_id: string): Promise<{ deletedCount: number }> => {
  return await bedroomModel.deleteOne({ _id })
}

export default {
  getAll,
  getById,
  getByEmail,
  save,
  update,
  destroy
}
