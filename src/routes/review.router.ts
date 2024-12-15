import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller';
import { checkAuth } from '../utils/checkAuth';

const router = Router();

router.get('/', ReviewController.getAll);
router.get('/:id', ReviewController.getOne);
router.post('/', ReviewController.create);
router.delete('/:id', checkAuth, ReviewController.delete);
router.put('/', checkAuth, ReviewController.update);

export default router;
