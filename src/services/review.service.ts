import { prisma } from '../server';
import { IReview } from '../types/review';

export class ReviewService {
  public static async getAll() {
    return await prisma.reviews.findMany();
  }

  public static async getAllByNewsId(id: number) {
    return await prisma.reviews.findMany({
      where: {
        newsId: id,
      },
    });
  }

  public static async getOne(id: number) {
    return await prisma.reviews.findUnique({
      where: {
        id: id,
      },
    });
  }
  public static async create(review: IReview) {
    return await prisma.reviews.create({
      data: review,
    });
  }
  public static async delete(id: number) {
    return await prisma.reviews.delete({
      where: {
        id: id,
      },
    });
  }
  public static async update(newReview: IReview) {
    return await prisma.reviews.update({
      where: {
        id: newReview.id,
      },
      data: newReview,
    });
  }
}
