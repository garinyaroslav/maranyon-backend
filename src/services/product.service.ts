import { prisma } from '../server';
import { IProduct } from '../types/product';

export class ProductService {
  public static async getAll() {
    return await prisma.products.findMany();
  }
  public static async getOne(id: number) {
    return await prisma.products.findUnique({
      where: {
        id: id,
      },
    });
  }
  public static async getProductsByCategory(category: string) {
    return await prisma.products.findMany({
      where: {
        category: category,
      },
    });
  }
  public static async createProduct(product: IProduct) {
    return await prisma.products.create({
      data: product,
    });
  }
  public static async deleteProduct(id: number) {
    return await prisma.products.delete({
      where: {
        id: id,
      },
    });
  }
  public static async updateProduct(newProduct: IProduct) {
    return await prisma.products.update({
      where: {
        id: newProduct.id,
      },
      data: newProduct,
    });
  }
}
