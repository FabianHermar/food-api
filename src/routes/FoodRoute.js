import { Router } from 'express'
import {
  createDish,
  deleteDishByUuid,
  getDishByUuid,
  getDishes,
  getDishesByName,
  getDishesByPrice,
  updateDishByUuid
} from '../controllers/FoodController.js'

const router = Router()

router.get('/dishes', getDishes)
router.post('/dishes', createDish)
router.get('/dishes/:uuid', getDishByUuid)
router.get( '/dishes/name/:name', getDishesByName )
router.get( '/dishes/price/:price', getDishesByPrice )
router.put('/dishes/:uuid', updateDishByUuid)
router.delete('/dishes/:uuid', deleteDishByUuid)

export default router
