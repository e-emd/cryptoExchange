import express from 'express';
const router = express.Router();

import { protect, admin } from '../middleware/authMiddleware.js';
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(protect, admin);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/:id').delete(protect, deleteUser);

export default router;
