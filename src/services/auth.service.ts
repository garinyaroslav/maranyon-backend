import { prisma } from '../server';

export class AuthService {
  public static async getAll() {
    return await prisma.admins.findMany();
  }
}
