import { Router } from 'express';
import { createDish, deleteDishByUuid, getDishByUuid, getDishes, updateDishByUuid } from '../controllers/FoodController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = Router();

router.get('/dishes',authMiddleware, getDishes);
router.post('/dishes', authMiddleware, createDish); 
router.get('/dishes/:uuid', authMiddleware, getDishByUuid);
router.put('/dishes/:uuid', authMiddleware, updateDishByUuid); 
router.delete('/dishes/:uuid', authMiddleware, deleteDishByUuid); 

export default router;
