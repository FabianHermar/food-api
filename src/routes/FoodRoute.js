import express from 'express';
import { getDishes, createDish, getDishByUuid, updateDishByUuid, deleteDishByUuid } from '../controllers/FoodController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Obtener todos los platillos
router.get('/dishes', getDishes);

// Crear un nuevo platillo
router.post('/dishes', authMiddleware, createDish);

// Obtener un platillo por uuid
router.get('/dishes/:uuid', getDishByUuid);

// Actualizar un platillo por uuid
router.put('/dishes/:uuid', authMiddleware, updateDishByUuid);

// Eliminar un platillo por uuid
router.delete('/dishes/:uuid', authMiddleware, deleteDishByUuid);

export default router;
