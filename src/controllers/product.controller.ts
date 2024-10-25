import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { IProduct } from '../types/product';

export class ProductController {
  public static async getAll(req: Request, res: Response) {
    try {
      const category = req.query.category as string;
      let products;

      if (category) {
        switch (category) {
          case 'all':
            products = await ProductService.getAll();
            break;
          default:
            products = await ProductService.getProductsByCategory(category);
        }
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
  public static async create(req: Request, res: Response) {
    try {
      const product = req.body as IProduct;
      const returnedProduct = await ProductService.createProduct(product);
      res.status(200).json(returnedProduct);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductService.deleteProduct(Number(id));
      res.status(200).json(deletedProduct);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async update(req: Request, res: Response) {
    try {
      const newProduct = req.body;
      console.log(newProduct);
      const returnedProduct = await ProductService.updateProduct(newProduct);
      res.status(200).json(returnedProduct);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
