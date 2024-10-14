import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  public static async getAll(_: Request, res: Response) {
    try {
      const products = await ProductService.getAll();
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const products = await ProductService.getOne(id);
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}


