import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Esquema de usuario
const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4, // Genera un UUID automáticamente para cada nuevo usuario
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
