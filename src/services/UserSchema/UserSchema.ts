import { Schema, model } from 'mongoose';
import { v4 } from 'uuid';

const UserSchema: Schema = new Schema({

  _id: {
    type: String,
    default: () => v4()
  },

  name: {
    type: String,
    required: true,
    max: 50
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    max: 50
  },

  password: {
    type: String,
    required: true
  },

  atCreated: {
    type: Date,
    default: Date.now()
  }
})

export default model('User', UserSchema);