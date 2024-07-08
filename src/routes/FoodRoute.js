import { Router } from 'express';
import { createDish, deleteDishByUuid, getDishByUuid, getDishes, updateDishByUuid } from '../controllers/FoodController.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Importa el middleware de autenticación

const router = Router();

router.get('/dishes', getDishes);
router.post('/dishes', authMiddleware, createDish); // Protege la ruta
router.get('/dishes/:uuid', getDishByUuid);
router.put('/dishes/:uuid', authMiddleware, updateDishByUuid); // Protege la ruta
router.delete('/dishes/:uuid', authMiddleware, deleteDishByUuid); // Protege la ruta

export default router;
