import { prisma } from "../server";

export class ProductService {
  public static async getAll() {
    return await prisma.PRODUCTS.findMany();
  }
  public static async getOne(id: number) {
    return await prisma.PRODUCTS.findUnique({
      where: {
        id: id
      }
    })
  }
}