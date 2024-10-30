import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller';

const router = Router();

router.get('/', ReviewController.getAll);
router.post('/', ReviewController.create);
router.delete('/:id', ReviewController.delete);
router.put('/', ReviewController.update);

export default router;
