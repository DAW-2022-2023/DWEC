import { number } from '@hapi/joi'
import { Schema, model } from 'mongoose'

const userSchema = Schema({
  name: {
    type: String,
    require: true,
    min: 6,
    max: 255
  },
  pages: {
    type: number,
    require: true,
    min: 1
  },
  isbn: {
    type: String,
    require: true,
    minlength: 6,
    maxlength: 8
  },
  date: {
    type: Date,
    require: true,
  }
})

export default model('Book', userSchema)