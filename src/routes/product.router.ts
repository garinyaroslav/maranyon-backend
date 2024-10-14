import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const router = Router();

router.get("/", ProductController.getAll);
router.get('/:id', ProductController.getOne);

export default router;
