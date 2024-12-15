import { Router } from 'express';
import { NewsController } from '../controllers/news.controller';
import { checkAuth } from '../utils/checkAuth';

const router = Router();

router.get('/', NewsController.getAll);
router.get('/:id', NewsController.getOne);
router.post('/', checkAuth, NewsController.create);
router.delete('/:id', checkAuth, NewsController.delete);
router.put('/', checkAuth, NewsController.update);

export default router;
