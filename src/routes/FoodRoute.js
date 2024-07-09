import { Router } from 'express'
import {
  createDish,
  deleteDishByUuid,
  getDishByUuid,
  getDishes,
  updateDishByUuid,
} from '../controllers/FoodController.js'

const router = Router()

router.get('/dishes', getDishes)
router.post('/dishes', createDish)
router.get('/dishes/:uuid', getDishByUuid)
router.put('/dishes/:uuid', updateDishByUuid)
router.delete('/dishes/:uuid', deleteDishByUuid)

export default router
