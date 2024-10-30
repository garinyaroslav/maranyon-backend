import { prisma } from '../server';
import { INews } from '../types/news';

export class NewsService {
  public static async getAll() {
    return await prisma.news.findMany();
  }
  public static async getOne(id: number) {
    return await prisma.news.findUnique({
      where: {
        id: id,
      },
    });
  }
  public static async create(product: INews) {
    return await prisma.news.create({
      data: product,
    });
  }
  public static async delete(id: number) {
    return await prisma.news.delete({
      where: {
        id: id,
      },
    });
  }
  public static async update(newNews: INews) {
    return await prisma.news.update({
      where: {
        id: newNews.id,
      },
      data: newNews,
    });
  }
}
