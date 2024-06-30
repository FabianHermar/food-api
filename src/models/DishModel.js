import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema( {
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [ String ],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: [ 'Tacos', 'Enchiladas', 'Quesadillas', 'Sopas', 'Postres', 'Bebidas' ],
    required: true
  }
} );

export default mongoose.model( 'DishModel', DishSchema );
