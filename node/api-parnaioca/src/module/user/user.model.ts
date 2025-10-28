import mongoose from 'mongoose'
import { User } from './user.type'

const userSchema = new mongoose.Schema<User, mongoose.Model<User>>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export const userModel = mongoose.model('users', userSchema)