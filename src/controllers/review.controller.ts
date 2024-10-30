import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service';
import { IReview } from '../types/review';

export class ReviewController {
  public static async getAll(req: Request, res: Response) {
    try {
      let reviews: IReview[];
      const newsId = req.query.newsId as string;

      if (newsId) reviews = await ReviewService.getAllByNewsId(Number(newsId));
      else reviews = await ReviewService.getAll();

      res.status(200).json(reviews);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const review = await ReviewService.getOne(Number(id));
      res.status(200).json(review);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async create(req: Request, res: Response) {
    try {
      const review = req.body as IReview;

      const returnedReview = await ReviewService.create(review);
      res.status(200).json(returnedReview);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const returnedReview = await ReviewService.delete(Number(id));
      res.status(200).json(returnedReview);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
  public static async update(req: Request, res: Response) {
    try {
      const newReview = req.body as IReview;
      const returnedReview = await ReviewService.update(newReview);
      res.status(200).json(returnedReview);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
