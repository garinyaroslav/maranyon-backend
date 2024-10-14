import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  public static async getAll(req: Request, res: Response) {
    try {
      const category = req.query.category as string;
      let products;

      if (category) {
        products = await ProductService.getProductsByCategory(category);
      } else {
        products = await ProductService.getAll();
      }
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const products = await ProductService.getOne(Number(id));
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}


