import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import connectDB from './config/db.js'
import FoodRoute from './routes/FoodRoute.js'
import AuthRoute from './routes/AuthRoute.js';


const app = express()
const PORT = process.env.PORT || 3000

connectDB()

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/', (req, res) => {
  res.json( {
    message: 'Welcome to the Food API',
    food_api: 'API is running 🚀',
    routes: [
      {
        method: 'GET',
        get_dishes: '/api/dishes',
      },
      {
        method: 'POST',
        create_dish: '/api/dishes',
        body: {
          uuid: 'String',
          name: 'String',
          description: 'String',
          ingredients: '[String]',
          price: 'Number',
          category: 'String'
        }
      },
      {
        method: 'GET',
        get_dish_by_uuid: '/api/dishes/:uuid',
      },
      {
        method: 'PUT',
        update_dish_by_uuid: '/api/dishes/:uuid',
        body: {
          name: 'String',
          description: 'String',
          ingredients: '[String]',
          price: 'Number',
          category: 'String'
        }
      },
      {
        method: 'DELETE',
        delete_dish_by_uuid: '/api/dishes/:uuid',
      },
      {
        method: 'POST',
        login_with_JWT: '/api/auth/login',
        body: {        
          username: 'String',
          password: 'String'
        }
      },
    ],
    note: 'This API is for educational purposes only. Do not use it in a production environment.',
    additional_note: "Don't forget to check the README.md file for more information."
  } )
} )



// Ruta JWT
app.use('/api/auth', AuthRoute);

// Add the FoodRoute to the app
app.use( '/api', FoodRoute )
 
// 404 Route
app.use( ( req, res ) => {
  return res.status( 404 ).json( {
    message: `Route ${req.url} Not found. 🙅‍♂️`
  } )
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
