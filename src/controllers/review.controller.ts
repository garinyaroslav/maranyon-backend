import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service';
import { IReview } from '../types/review';

export class ReviewController {
  public static async getAll(_: Request, res: Response) {
    try {
      const reviews = await ReviewService.getAll();

      res.status(200).json(reviews);
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
