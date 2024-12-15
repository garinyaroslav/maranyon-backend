import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { checkAuth } from '../utils/checkAuth';

const router = Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.post('/', checkAuth, ProductController.create);
router.delete('/:id', checkAuth, ProductController.delete);
router.put('/', checkAuth, ProductController.update);

export default router;
