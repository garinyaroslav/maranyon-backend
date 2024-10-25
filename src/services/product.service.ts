import { prisma } from '../server';
import { IProduct } from '../types/product';

export class ProductService {
  public static async getAll() {
    return await prisma.pRODUCTS.findMany();
  }
  public static async getOne(id: number) {
    return await prisma.pRODUCTS.findUnique({
      where: {
        id: id,
      },
    });
  }
  public static async getProductsByCategory(category: string) {
    return await prisma.pRODUCTS.findMany({
      where: {
        category: category,
      },
    });
  }
  public static async createProduct(product: IProduct) {
    return await prisma.pRODUCTS.create({
      data: product,
    });
  }
  public static async deleteProduct(id: number) {
    return await prisma.pRODUCTS.delete({
      where: {
        id: id,
      },
    });
  }
  public static async updateProduct(newProduct: IProduct) {
    return await prisma.pRODUCTS.update({
      where: {
        id: newProduct.id,
      },
      data: newProduct,
    });
  }
}
