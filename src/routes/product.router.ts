import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';

const router = Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.post('/', ProductController.create);
router.delete('/:id', ProductController.delete);
router.put('/', ProductController.update);

export default router;
