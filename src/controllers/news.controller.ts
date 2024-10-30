import { Request, Response } from 'express';
import { INews } from '../types/news';
import { NewsService } from '../services/news.service';

export class NewsController {
  public static async getAll(_: Request, res: Response) {
    try {
      const news = await NewsService.getAll();

      res.status(200).json(news);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const news = await NewsService.getOne(Number(id));
      res.status(200).json(news);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async create(req: Request, res: Response) {
    try {
      const product = req.body as INews;

      const returnedNews = await NewsService.create(product);
      res.status(200).json(returnedNews);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const returnedNews = await NewsService.delete(Number(id));
      res.status(200).json(returnedNews);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async update(req: Request, res: Response) {
    try {
      const newNews = req.body as INews;
      const returnedNews = await NewsService.update(newNews);
      res.status(200).json(returnedNews);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
