import mongoose, { Schema } from 'mongoose'

const deviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['walk', 'bus'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  coordinate: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
  }
})

export default mongoose.model('device', deviceSchema)
