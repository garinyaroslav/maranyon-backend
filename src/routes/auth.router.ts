import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { checkAuth } from '../utils/checkAuth';

const router = Router();

router.post('/', AuthController.login);
router.post('/verify', checkAuth, AuthController.verify);

export default router;
