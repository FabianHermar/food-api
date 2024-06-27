import 'dotenv/config'
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.zkvv1hu.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    await mongoose.connect(mongoURI, options)
    console.log('Conectado a MongoDB')
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error)
    process.exit(1) // Detener el proceso si no se puede conectar a la base de datos
  }
}

export default connectDB
