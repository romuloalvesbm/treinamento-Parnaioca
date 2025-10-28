import type { User, UserCreate, UserUpdate } from "./user.type";
import { userModel } from './user.model'
import bcrypt from 'bcrypt'

const getAll = async (name?: string): Promise<User[] | []> => {
  if (name) {
    return await userModel.find({ name }).lean()
  }

  return await userModel.find().lean()
}

const getById = async (_id: string): Promise<User | null> => {
  return await userModel.findById(_id).lean()
}

const getByEmail = async (email: string): Promise<User | null> => {
  return await userModel.findOne({ email }).lean()
}

const save = async (params: UserCreate): Promise<User> => {
  params.password = bcrypt.hashSync(params.password, 10)
  return await userModel.create(params)
}

const update = async (_id: string, params: UserUpdate): Promise<User | null> => {
  if (params.password) {
    params.password = bcrypt.hashSync(params.password, 10)
  }

  return await userModel.findOneAndUpdate({ _id }, params).lean()
}

const destroy = async (_id: string): Promise<{ deletedCount: number }> => {
  return await userModel.deleteOne({ _id })
}

export default {
  getAll,
  getById,
  getByEmail,
  save,
  update,
  destroy
}
