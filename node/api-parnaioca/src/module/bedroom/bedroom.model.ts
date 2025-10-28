import mongoose, { Types } from 'mongoose'
import { Bedroom } from './bedroom.type'

const bedroomSchema = new mongoose.Schema<Bedroom, mongoose.Model<Bedroom>>({
  userId: {
    type: Types.ObjectId,
    ref: 'users'
  },
  bedroom: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  }
}, {
  timestamps: true
})

export const bedroomModel = mongoose.model('bedrooms', bedroomSchema)