// UserRoutes.js
import express from 'express';
import { createUser, login, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userControllers.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Registro de usuario
router.post('/register', createUser);

// Login de usuario
router.post('/login', login);

// Obtener todos los usuarios
router.get('/', authMiddleware, getUsers);

// Obtener un usuario por ID
router.get('/:id', authMiddleware, getUserById);

// Actualizar un usuario
router.put('/:id', authMiddleware, updateUser);

// Eliminar un usuario
router.delete('/:id', authMiddleware, deleteUser);

export default router;
