import { Router } from 'express';
import { NewsController } from '../controllers/news.controller';

const router = Router();

router.get('/', NewsController.getAll);
router.get('/:id', NewsController.getOne);
router.post('/', NewsController.create);
router.delete('/:id', NewsController.delete);
router.put('/', NewsController.update);

export default router;
