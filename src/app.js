import express from 'express'
import morgan from 'morgan'

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use( express.json() )
app.use( morgan( 'dev' ) )

app.get( '/', ( req, res ) => {
  res.send( 'Hello World' )
} )

app.get( ( req, res ) => {
  res.status( 404 ).json( { message: 'Not Found' } )
} )

app.listen( PORT, () => {
  console.log( `Server is running on http://localhost:${PORT}` )
} )